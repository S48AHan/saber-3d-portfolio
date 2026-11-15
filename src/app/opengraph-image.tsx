import { ImageResponse } from "next/og";

export const alt = "Saber Ahmed — Freelance React & Next.js Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #0b1020 0%, #1e1b4b 60%, #083344 100%)",
          color: "white",
        }}
      >
        <div style={{ fontSize: 34, color: "#a5b4fc" }}>Available for new projects</div>
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 16 }}>Saber Ahmed</div>
        <div style={{ fontSize: 44, color: "#67e8f9", marginTop: 8 }}>
          React · Next.js · TypeScript · Three.js
        </div>
        <div style={{ fontSize: 32, color: "#cbd5e1", marginTop: 32 }}>
          I help you build fast, modern websites and web apps.
        </div>
      </div>
    ),
    size,
  );
}
