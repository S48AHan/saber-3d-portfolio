import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Saber Ahmed — Freelance React & Next.js Developer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  const logo = await readFile(join(process.cwd(), "public/logo-on-dark.svg"), "base64");
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
        <img src={`data:image/svg+xml;base64,${logo}`} width={281} height={64} alt="" />
        <div style={{ fontSize: 88, fontWeight: 700, marginTop: 40 }}>Saber Ahmed</div>
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
