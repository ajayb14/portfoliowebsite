import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio Website",
  description: "A portfolio website showcasing projects and skills.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* You can add more meta tags here as needed */}
        <meta charSet="UTF-8" />
        <meta name="description" content="A portfolio website showcasing projects and skills." />
        <meta name="author" content="Ajay Bharanidhar" />
        <meta name="robots" content="index, follow" />
        {/* Link to favicon or other assets */}
        <link rel="icon" href="/favicon.ico" />
        <title>Portfolio Website</title>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}

