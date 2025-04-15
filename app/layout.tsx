import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from 'next/font/local'
import "./globals.css";
import Navigation from "../components/navigation";
import { Toaster } from "@/components/ui/sonner";

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
    },
    {
      path: '../public/fonts/SFTSchriftedSerifTRIALD-It.woff',
      weight: '400',
      style: 'italic'
    },
    {
      path: '../public/fonts/SFTSchriftedSerifTRIALD-Lt-It.woff',
      weight: '300',
      style: 'italic'
    },
    {
      path: '../public/fonts/SFTSchriftedSerifTRIALD-Md-It.woff',
      weight: '500',
      style: 'italic'
    },
    {
      path: '../public/fonts/SFTSchriftedSerifTRIALD-Bd-It.woff',
      weight: '700',
      style: 'italic'
    }
  ],
  variable: '--font-sft-serif',
  display: 'swap'
})

const sftSans = localFont({
  src: [
    {
      path: '../public/fonts/SFTSchriftedSansTRIAL-Regular-BF6413e215a3cfa.woff',
      weight: '400',
      style: 'normal'
    },
    {
      path: '../public/fonts/SFTSchriftedSansTRIAL-Light-BF6413e215e5eb1.woff',
      weight: '300',
      style: 'normal'
    },
    {
      path: '../public/fonts/SFTSchriftedSansTRIAL-Medium-BF6413e214dfec0.woff',
      weight: '500',
      style: 'normal'
    },
    {
      path: '../public/fonts/SFTSchriftedSansTRIAL-Bold-BF6413e215ba51f.woff',
      weight: '700',
      style: 'normal'
    }
  ],
  variable: '--font-sft-sans',
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
        className={`${geistMono.variable} ${sftSerif.variable} ${sftSans.variable} antialiased`}
      >
        <Navigation />
        {children}
        <Toaster />
      </body>
    </html>
  );
}
