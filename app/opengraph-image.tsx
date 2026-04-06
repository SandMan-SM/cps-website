import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Comprehensive Psychological Services — Neuropsych, ADHD & Custody Evaluations in Utah";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #0a284b 0%, #0f3460 50%, #0a284b 100%)",
          padding: "60px",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        {/* Top bar */}
        <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "40px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: "56px",
              height: "56px",
              borderRadius: "12px",
              backgroundColor: "#1f7cec",
            }}
          >
            <span style={{ fontSize: "28px", color: "white", fontWeight: 800 }}>C</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <span style={{ fontSize: "20px", color: "white", fontWeight: 700 }}>Comprehensive Psychological Services</span>
            <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.5)" }}>Since 1986 — Salt Lake City • Layton • West Jordan</span>
          </div>
        </div>

        {/* Main title */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontSize: "48px",
              fontWeight: 800,
              color: "white",
              lineHeight: 1.15,
              marginBottom: "20px",
              maxWidth: "900px",
            }}
          >
            Expert Neuropsychological Evaluations, ADHD Testing & Behavioral Health
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "rgba(255,255,255,0.7)",
              lineHeight: 1.5,
              maxWidth: "700px",
            }}
          >
            Evidence-based evaluations and treatment across three Utah locations. ADHD, autism, custody evaluations, ketamine therapy & more.
          </div>
        </div>

        {/* Service pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", marginTop: "20px" }}>
          {["Neuropsych", "ADHD", "Autism", "Custody", "Ketamine", "IOP"].map((svc) => (
            <div
              key={svc}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 20px",
                borderRadius: "10px",
                backgroundColor: "rgba(31,124,236,0.15)",
                border: "1px solid rgba(31,124,236,0.3)",
              }}
            >
              <span style={{ fontSize: "14px", color: "#60a5fa", fontWeight: 600 }}>{svc}</span>
            </div>
          ))}
        </div>

        {/* Phone */}
        <div style={{ display: "flex", alignItems: "center", gap: "8px", marginTop: "20px" }}>
          <span style={{ fontSize: "18px", color: "#10b2e0", fontWeight: 700 }}>(801) 483-1600</span>
          <span style={{ fontSize: "14px", color: "rgba(255,255,255,0.4)" }}>• psychandcustodyevaluations.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
