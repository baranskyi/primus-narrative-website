import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt =
  "Primus Narrative — Strategy, Communications & Growth. Dubai, Meydan Free Zone.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

async function loadFont(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Font fetch failed: ${res.status}`);
  return res.arrayBuffer();
}

export default async function OpengraphImage() {
  // Google Fonts raw WOFF2 — stable, cached by Vercel Edge
  const [serif, serifItalic, mono] = await Promise.all([
    loadFont(
      "https://fonts.gstatic.com/s/instrumentserif/v5/jizBRFtNs2ka5fXjeivQ4LroWlx-2zI.ttf"
    ).catch(() => null),
    loadFont(
      "https://fonts.gstatic.com/s/instrumentserif/v5/jizHRFtNs2ka5fXjeivQ4LroWlx-6zATiw.ttf"
    ).catch(() => null),
    loadFont(
      "https://fonts.gstatic.com/s/jetbrainsmono/v24/tDbY2o-flEEny0FZhsfKu5WU4zr3E_BX0PnT8RD8yKxjPQ.ttf"
    ).catch(() => null),
  ]);

  const fonts: Array<{
    name: string;
    data: ArrayBuffer;
    style: "normal" | "italic";
    weight: 400;
  }> = [];
  if (serif) fonts.push({ name: "Instrument Serif", data: serif, style: "normal", weight: 400 });
  if (serifItalic) fonts.push({ name: "Instrument Serif", data: serifItalic, style: "italic", weight: 400 });
  if (mono) fonts.push({ name: "JetBrains Mono", data: mono, style: "normal", weight: 400 });

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: "#f3efe7",
          color: "#111014",
          padding: "56px 72px",
          fontFamily: "Instrument Serif, serif",
          position: "relative",
        }}
      >
        {/* Top bar (mono) */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 18,
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: "#6b6459",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div
              style={{
                width: 12,
                height: 12,
                borderRadius: 999,
                background: "#f73298",
              }}
            />
            <span>Dubai · Meydan Free Zone</span>
          </div>
          <div>primusnarrative.com</div>
        </div>

        {/* Wordmark */}
        <div
          style={{
            marginTop: 36,
            fontSize: 52,
            letterSpacing: "-0.015em",
            display: "flex",
            alignItems: "baseline",
            gap: 12,
          }}
        >
          <span>
            Pr<span style={{ color: "#f73298", fontStyle: "italic" }}>i</span>
            mus
          </span>
          <span style={{ color: "#6b6459" }}>·</span>
          <span style={{ fontStyle: "italic" }}>Narrative</span>
        </div>

        {/* Headline (Instrument Serif) */}
        <div
          style={{
            marginTop: "auto",
            marginBottom: 28,
            fontSize: 132,
            lineHeight: 0.9,
            letterSpacing: "-0.025em",
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Strategy.</span>
          <span style={{ fontStyle: "italic", color: "#f73298" }}>
            Narrative.
          </span>
          <span>
            Growth —{" "}
            <span style={{ fontStyle: "italic" }}>shipped.</span>
          </span>
        </div>

        {/* Footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(17,16,20,0.2)",
            paddingTop: 18,
            fontSize: 18,
            fontFamily: "JetBrains Mono, monospace",
            letterSpacing: "0.14em",
            textTransform: "uppercase",
            color: "#2a2730",
          }}
        >
          <div style={{ display: "flex", gap: 28, alignItems: "center" }}>
            <span>Marketing</span>
            <span style={{ color: "#f73298", fontSize: 24 }}>·</span>
            <span>Communications</span>
            <span style={{ color: "#f73298", fontSize: 24 }}>·</span>
            <span>Growth</span>
          </div>
          <div style={{ color: "#6b6459" }}>Est. 2026</div>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length > 0 ? fonts : undefined,
    }
  );
}
