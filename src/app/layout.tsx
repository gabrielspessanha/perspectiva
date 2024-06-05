import type { Metadata } from "next";
import { Oswald } from "next/font/google";
import "../styles/globals.scss";

const oswald = Oswald({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CFO CBMERJ 2024",
  description:
    "Você é tão Capaz de Virar Bombeiro Militar Quantos os 60 Alunos que Nós Aprovamos no CFO CBMERJ 2023",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="icon" href="/perspectivaLogo.png" type="image/png" />
      </head>
      <body className={oswald.className}>{children}</body>
    </html>
  );
}
