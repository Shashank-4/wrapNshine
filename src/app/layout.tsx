import type { Metadata } from "next";
import "@fontsource/cormorant-garamond/400.css";
import "@fontsource/cormorant-garamond/400-italic.css";
import "@fontsource/manrope/400.css";
import "@fontsource/manrope/500.css";
import "lenis/dist/lenis.css";
import "./globals.css";
export const metadata: Metadata = {
  title: "wrapNshine — A New Expression",
  description:
    "Thoughtful vehicle wrapping, paint protection and precision detailing. Your car, beautifully reimagined.",
  robots: { index: false, follow: false },
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
