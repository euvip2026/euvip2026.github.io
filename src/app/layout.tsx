import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EUVIP 2026 - Luxembourg",
  description: "EUVIP 2026 conference in Luxembourg.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
