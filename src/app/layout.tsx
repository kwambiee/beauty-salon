import type { Metadata } from "next";
import { Geist, Geist_Mono, Epilogue } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/footer";
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
  weight: ["400", "700"],
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
      <body className={`${epilogue.variable} antialiased`}>
        <div className="flex flex-col min-h-screen">
          <header className="sticky top-0 z-50">
            <NavBar />
          </header>
          <main className="overflow-y-auto h-2/5">{children}</main>
          {/* <Footer /> */}
        </div>
      </body>
    </html>
  );
}
