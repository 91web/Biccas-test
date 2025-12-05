
import type { Metadata } from "next";
//import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
//import Navbar from "./components/navbar";
import LogB from "../assets/svg/log-icon.svg";
import ResponsiveAppBar from "./components/appbar";

//const geistSans = Geist({
//variable: "--font-geist-sans",
//subsets: ["latin"],
//});

//onst geistMono = Geist_Mono({
//variable: "--font-geist-mono",
//subsets: ["latin"],
//});

export const metadata: Metadata = {
  title: "Biccas App",
  description: "Biccas Landing Page",
  icons: {
    icon: [
      {
        url: LogB.src,
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        //  className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ResponsiveAppBar />
        {children}
      </body>
    </html>
  );
}
