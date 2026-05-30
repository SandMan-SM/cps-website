import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

export function GET() {
  return NextResponse.json({
    ok: true,
    service: "cps-website",
    status: "ready",
    timestamp: new Date().toISOString(),
  });
}
