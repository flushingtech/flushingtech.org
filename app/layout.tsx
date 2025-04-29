import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import fontVariables from "@/app/ui/fonts";
import HeaderComponent from "@/components/components-header";
import FooterComponent from "@/components/components-footer";


const inter = Inter({ subsets: ["latin"] });

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
      <body className={`${inter.className} ${fontVariables}`}>
        <HeaderComponent></HeaderComponent>
        {children}
        <FooterComponent />
      </body>
    </html>
  );
}
