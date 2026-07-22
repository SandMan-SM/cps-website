export type JsonRequestFailureReason =
  | "invalid_json"
  | "payload_too_large"
  | "unsupported_media_type";

export type JsonRequestResult<T> =
  | { ok: true; value: T }
  | {
      ok: false;
      reason: JsonRequestFailureReason;
      status: 400 | 413 | 415;
    };

/**
 * Read a JSON request without trusting Content-Length. The stream is stopped
 * as soon as it exceeds the route-specific limit so chunked requests cannot
 * bypass the public form proxy's body-size guard.
 */
export async function readJsonRequest<T>(
  request: Request,
  maxBytes: number,
): Promise<JsonRequestResult<T>> {
  const mediaType = request.headers
    .get("content-type")
    ?.split(";", 1)[0]
    ?.trim()
    .toLowerCase();
  if (mediaType !== "application/json") {
    return { ok: false, reason: "unsupported_media_type", status: 415 };
  }

  const declaredLength = request.headers.get("content-length");
  if (declaredLength) {
    const declaredBytes = Number(declaredLength);
    if (Number.isFinite(declaredBytes) && declaredBytes > maxBytes) {
      return { ok: false, reason: "payload_too_large", status: 413 };
    }
  }

  if (!request.body) {
    return { ok: false, reason: "invalid_json", status: 400 };
  }

  const reader = request.body.getReader();
  const chunks: Uint8Array[] = [];
  let byteLength = 0;

  try {
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      byteLength += value.byteLength;
      if (byteLength > maxBytes) {
        await reader.cancel().catch(() => undefined);
        return { ok: false, reason: "payload_too_large", status: 413 };
      }
      chunks.push(value);
    }

    const bytes = new Uint8Array(byteLength);
    let offset = 0;
    for (const chunk of chunks) {
      bytes.set(chunk, offset);
      offset += chunk.byteLength;
    }

    const text = new TextDecoder("utf-8", { fatal: true }).decode(bytes);
    return { ok: true, value: JSON.parse(text) as T };
  } catch {
    return { ok: false, reason: "invalid_json", status: 400 };
  }
}
