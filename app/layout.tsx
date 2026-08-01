import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://judahye-portfolio.vercel.app"),

  title: {
    default: "JU DAHYE | Content Marketing Portfolio",
    template: "%s | JU DAHYE",
  },

  description:
    "검색 의도와 제품 정보를 연결하는 콘텐츠 마케터 주다혜의 포트폴리오입니다.",

  openGraph: {
    title: "JU DAHYE | Content Marketing Portfolio",
    description:
      "SEO 콘텐츠, B2B 웹 콘텐츠와 협업 프로젝트를 담은 주다혜의 포트폴리오입니다.",
    url: "https://judahye-portfolio.vercel.app",
    siteName: "JU DAHYE Portfolio",
    locale: "ko_KR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "JU DAHYE | Content Marketing Portfolio",
    description:
      "검색 의도와 제품 정보를 연결하는 콘텐츠 마케터 주다혜의 포트폴리오입니다.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  );
}