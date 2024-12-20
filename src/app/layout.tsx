import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/header";
import Footer from "./components/footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Inter } from '@next/font/google';


const inter = Inter({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "UI UX Hackathon",
  description: "Generated by Bisal Shafiq",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
      <div className={`${inter.className}`}>
        <Header />
        {children}
        <Footer />
      </div>
      </body>
    </html>
  );
}
