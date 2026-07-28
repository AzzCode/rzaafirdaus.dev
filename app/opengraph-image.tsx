import { ImageResponse } from "next/og";

import { profile } from "@/data/profile";

export const alt = "Portofolio profesional Reza Firdaus";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background:
            "radial-gradient(circle at 82% 18%, #173b87 0%, #0a1535 26%, #050816 62%)",
          color: "#f8fafc",
          display: "flex",
          height: "100%",
          justifyContent: "space-between",
          padding: "72px 80px",
          position: "relative",
          width: "100%",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            maxWidth: "790px",
          }}
        >
          <div
            style={{
              color: "#60a5fa",
              display: "flex",
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
            }}
          >
            Software · Research · Leadership
          </div>
          <div
            style={{
              display: "flex",
              fontSize: 76,
              fontWeight: 800,
              letterSpacing: "-0.045em",
              lineHeight: 1.04,
              marginTop: 28,
            }}
          >
            {profile.name}
          </div>
          <div
            style={{
              color: "#cbd5e1",
              display: "flex",
              fontSize: 36,
              fontWeight: 600,
              marginTop: 18,
            }}
          >
            {profile.headline}
          </div>
          <div
            style={{
              color: "#94a3b8",
              display: "flex",
              fontSize: 24,
              lineHeight: 1.45,
              marginTop: 28,
            }}
          >
            Software development, applied research, dan pengalaman lintas
            disiplin.
          </div>
        </div>

        <div
          style={{
            alignItems: "center",
            background: "rgba(59, 130, 246, 0.12)",
            border: "2px solid rgba(96, 165, 250, 0.35)",
            borderRadius: 42,
            display: "flex",
            fontSize: 62,
            fontWeight: 800,
            height: 190,
            justifyContent: "center",
            width: 190,
          }}
        >
          {profile.initials}
        </div>
      </div>
    ),
    size,
  );
}
