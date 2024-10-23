import type { Metadata } from "next";
import { Inter, Titillium_Web, Montserrat } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/components-header";

const inter = Inter({ subsets: ["latin"] });
const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium",
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-montserrat",
});

export const metadata: Metadata = {
  title: "Flushing Tech",
  description: "A group for tech enthusiasts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${titilliumWeb.variable} ${montserrat.variable}`}
      >
        <HeaderComponent></HeaderComponent>
        {children}
      </body>
    </html>
  );
}
