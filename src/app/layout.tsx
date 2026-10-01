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
        <footer className="bg-primary200 py-6 text-center text-xs text-neutral50">
          <a
            href="https://portfolio-penne.vercel.app/"
            target="_blank"
            rel="noopener"
            className="underline underline-offset-4 hover:opacity-70"
          >
            Desenvolvido por Penne · Faça o site do seu casamento conosco
          </a>
        </footer>
      </body>
    </html>
  );
}
