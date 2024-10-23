import type { Metadata } from "next";
import { Inter, Titillium_Web } from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/components/components-header";

const inter = Inter({ subsets: ["latin"] });
const titilliumWeb = Titillium_Web({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-titillium",
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
      <body className={inter.className + ` ${titilliumWeb.variable}`}>
        <HeaderComponent></HeaderComponent>
        {children}
      </body>
    </html>
  );
}
