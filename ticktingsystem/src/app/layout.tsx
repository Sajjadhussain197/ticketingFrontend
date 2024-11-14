
import type { Metadata } from "next";
import { SessionProvider } from 'next-auth/react';
import { Figtree , Barlow} from "next/font/google";
import "./globals.css";
const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
});
const barlow = Barlow({
  subsets: ["latin"],
  variable: "--font-barlow",
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});
export const metadata: Metadata = {
  title: "ticketting",
  description: "ticketing app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
          className={`${figtree.variable} ${barlow.variable} antialiased`}
      >
        {/* <Header  /> */}
        {/* <HeaderPanel /> */}
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
