import { ImageResponse } from "next/og";

export const alt =
  "Core is sincerity — JU DAHYE Content Marketing Portfolio";

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
          width: "100%",
          height: "100%",
          position: "relative",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          background: "#f1eee7",
          color: "#1c1b19",
          padding: "62px 72px",
          overflow: "hidden",
        }}
      >
        {/* 배경 숫자 */}
        <div
          style={{
            position: "absolute",
            top: "-95px",
            left: "25px",
            display: "flex",
            fontSize: 390,
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-30px",
            color: "rgba(28, 27, 25, 0.035)",
          }}
        >
          2026
        </div>

        {/* 위쪽 정보 */}
        <div
          style={{
            position: "absolute",
            top: 52,
            left: 72,
            right: 72,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            fontSize: 14,
            letterSpacing: "5px",
            color: "rgba(28, 27, 25, 0.48)",
          }}
        >
          <span>PERSONAL ARCHIVE</span>
          <span>PORTFOLIO · 2026</span>
        </div>

        {/* 메인 문구 */}
        <div
          style={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            marginLeft: 170,
            fontSize: 116,
            fontWeight: 500,
            lineHeight: 0.88,
            letterSpacing: "-8px",
          }}
        >
          <span>Core is</span>

          <span
            style={{
              marginLeft: 92,
              fontStyle: "italic",
            }}
          >
            sincerity.
          </span>
        </div>

        {/* 아래쪽 정보 */}
        <div
          style={{
            position: "absolute",
            bottom: 52,
            left: 72,
            right: 72,
            paddingTop: 22,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            borderTop: "1px solid rgba(28, 27, 25, 0.18)",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 8,
            }}
          >
            <span
              style={{
                fontSize: 18,
                letterSpacing: "4px",
              }}
            >
              JU DAHYE
            </span>

            <span
              style={{
                fontSize: 13,
                letterSpacing: "3px",
                color: "rgba(28, 27, 25, 0.5)",
              }}
            >
              CONTENT MARKETING PORTFOLIO
            </span>
          </div>

          <span
            style={{
              fontSize: 13,
              letterSpacing: "2px",
              color: "rgba(28, 27, 25, 0.46)",
            }}
          >
            judahye-portfolio.vercel.app
          </span>
        </div>

        {/* 모서리 장식 */}
        <div
          style={{
            position: "absolute",
            top: 25,
            left: 25,
            width: 22,
            height: 22,
            borderTop: "1px solid rgba(28, 27, 25, 0.25)",
            borderLeft: "1px solid rgba(28, 27, 25, 0.25)",
          }}
        />

        <div
          style={{
            position: "absolute",
            right: 25,
            bottom: 25,
            width: 22,
            height: 22,
            borderRight: "1px solid rgba(28, 27, 25, 0.25)",
            borderBottom: "1px solid rgba(28, 27, 25, 0.25)",
          }}
        />
      </div>
    ),
    size,
  );
}