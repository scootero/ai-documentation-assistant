import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "AI Documentation Assistant",
  description: "Organize and evolve your documentation with the help of AI.",
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
