import type { Metadata } from "next";
import { Cute_Font } from "next/font/google";
import "./globals.css";

const CuteFont = Cute_Font({
  // preload: true, 기본값
  subsets: ["latin"], // 또는 preload: false
  weight: ["400"], // 가변 폰트가 아닌 경우, 사용할 fontWeight 배열
});

export const metadata: Metadata = {
  title: "보라종일이네 집들이",
  description: "2024.12.24 ><",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={CuteFont.className}
        style={{ display: "flex", justifyContent: "center" }}
      >
        {children}
      </body>
    </html>
  );
}
