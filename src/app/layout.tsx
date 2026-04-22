import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Browse All Apps | AlternativeTo",
  description: "Explore alternatives to your favorite apps. Browse by category, platform, and discover new software powered by community ratings.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}