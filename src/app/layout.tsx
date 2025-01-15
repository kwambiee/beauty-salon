import type { Metadata } from "next";
import { Geist, Geist_Mono, Epilogue } from "next/font/google";
import "./globals.css";
import { Footer } from "react-day-picker";
import NavBar from "@/components/ui/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const epilogue = Epilogue({
  weight: ["400","700"],
  variable: "--font-epilogue",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Yakira Beauty Salon",
  description: "Beauty Salon",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${epilogue.variable} antialiased `}>
        <div className="relative flex size-full min-h-screen flex-col bg-[#edd4da] p-10 group/design-root overflow-x-hidden">
          <div className="layout-container flex h-full grow flex-col">
            <NavBar />
            <main className="">{children}</main>
          </div>
        </div>
      </body>
    </html>
  );
}
