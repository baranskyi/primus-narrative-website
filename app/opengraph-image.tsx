import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt =
  "Primus Narrative — Strategy, Communications & Growth. Dubai, Meydan Free Zone.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Brand tokens (app/globals.css)
const BURGUNDY = "#542536";
const CREAM = "#F4EFE7";
const ICE = "#CDE5EF";
const TAUPE = "#6B6159";

async function loadFont(url: string) {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`Font fetch failed: ${res.status}`);
  return res.arrayBuffer();
}

export default async function OpengraphImage() {
  // Google Fonts raw TTF — Satori cannot read WOFF2
  const [serif, serifBold, sans] = await Promise.all([
    loadFont(
      "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_s06GnM.ttf"
    ).catch(() => null),
    loadFont(
      "https://fonts.gstatic.com/s/cormorantgaramond/v21/co3umX5slCNuHLi8bLeY9MK7whWMhyjypVO7abI26QOD_hg9GnM.ttf"
    ).catch(() => null),
    loadFont(
      "https://fonts.gstatic.com/s/jost/v20/92zPtBhPNqw79Ij1E865zBUv7myRJQVG.ttf"
    ).catch(() => null),
  ]);

  const fonts: Array<{
    name: string;
    data: ArrayBuffer;
    style: "normal";
    weight: 500 | 700;
  }> = [];
  if (serif) fonts.push({ name: "Cormorant Garamond", data: serif, style: "normal", weight: 500 });
  if (serifBold) fonts.push({ name: "Cormorant Garamond", data: serifBold, style: "normal", weight: 700 });
  if (sans) fonts.push({ name: "Jost", data: sans, style: "normal", weight: 500 });

  const label = {
    fontFamily: "Jost, sans-serif",
    fontWeight: 500,
    fontSize: 17,
    letterSpacing: "3.4px",
    textTransform: "uppercase" as const,
  };

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          background: CREAM,
          color: BURGUNDY,
          padding: "60px 72px",
          fontFamily: "Cormorant Garamond, serif",
          position: "relative",
        }}
      >
        {/* Ice block at the right edge */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: 300,
            background: ICE,
          }}
        />

        {/* Wordmark */}
        <div style={{ fontSize: 30, fontWeight: 500, letterSpacing: "7px" }}>
          PRIMUS NARRATIVE
        </div>
        <div style={{ ...label, marginTop: 18 }}>Dubai · Meydan Free Zone</div>

        {/* Brand line, Narrative in bold */}
        <div
          style={{
            marginTop: "auto",
            marginBottom: 30,
            fontSize: 108,
            fontWeight: 500,
            lineHeight: 0.92,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <span>Strategy.</span>
          <span style={{ fontWeight: 700 }}>Narrative.</span>
          <span>Growth.</span>
        </div>

        {/* Burgundy hairline above the footer row */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            width: 756,
            borderTop: `1.5px solid ${BURGUNDY}`,
            paddingTop: 16,
            ...label,
            color: TAUPE,
          }}
        >
          <span>Strategy · Communications · Growth</span>
          <span>primusnarrative.com</span>
        </div>
      </div>
    ),
    {
      ...size,
      fonts: fonts.length > 0 ? fonts : undefined,
    }
  );
}
