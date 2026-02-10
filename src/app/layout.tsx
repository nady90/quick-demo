import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";

const figTree = Figtree({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "M5L Software, Inc.",
  description: "Quick Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${figTree.className} antialiased`}>{children}</body>
    </html>
  );
}
