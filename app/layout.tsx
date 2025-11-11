import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Doutor Libras",
  description:
    "O projeto Doutor Libras oferece atendimento médico remoto acessível à comunidade surda por meio de videochamadas com intérprete de Libras, promovendo inclusão e qualidade no cuidado à saúde.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body suppressHydrationWarning className={`${inter.variable} ${poppins.variable} font-sans relative antialiased`}>
        {children}
      </body>
    </html>
  );
}
