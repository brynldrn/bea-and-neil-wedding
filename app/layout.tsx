import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Bea & Neil Wedding Website",
  description: "Join us for our wedding celebration!",
};

const sftSerif = localFont({
  src: [
    {
      path: '../public/fonts/SFTSchriftedSerifTRIALD-Rg.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/SFTSchriftedSerifTRIALD-Lt.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../public/fonts/SFTSchriftedSerifTRIALD-Md.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/SFTSchriftedSerifTRIALD-Bd.woff',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-sft-serif',
  display: 'swap'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${sftSerif.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
