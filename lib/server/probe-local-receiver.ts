/** Development-only, authenticated connectivity probe. No submitted PII is forwarded. */
export async function probeLocalCpsReceiver(
  workflow: "appointments" | "newsletter",
  headers: Headers | null,
): Promise<boolean> {
  if (process.env.NODE_ENV !== "development" ||
      process.env.CPS_OMNI_LOCAL_BRIDGE !== "1" || !headers) return false;
  try {
    const response = await fetch(`http://127.0.0.1:3002/api/inbound/cps/${workflow}`, {
      method: "POST",
      headers,
      body: JSON.stringify({
        site: "cps",
        source: "cpsutah.org",
        email: "no-write@example.invalid",
        website: "authenticated-no-write-probe",
      }),
      signal: AbortSignal.timeout(10_000),
      cache: "no-store",
    });
    const result = await response.json() as { ok?: boolean; completion?: string };
    return response.ok && result.ok === true && result.completion === "no_write";
  } catch {
    return false;
  }
}
