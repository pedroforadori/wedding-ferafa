import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefinSans = Josefin_Sans({
  weight: ["100", "300", "400", "700"],
  variable: "--font-josefin",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fernanda e Rafael",
  description: "Site de casamento de Fernanda e Rafael",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={`${josefinSans.variable} font-sans`}
      >
        {children}
      </body>
    </html>
  );
}
