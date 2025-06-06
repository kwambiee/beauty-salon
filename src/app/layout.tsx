import type { Metadata } from "next";
import { Epilogue } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/ui/navbar";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

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
        <div className="flex relative min-h-screen h-full ">
          <aside className="w-1/4">
            <NavBar />
          </aside>
          <div className="w-3/4 h-full">
            <main className="h-full">{children}</main>
            <div className="">
              {/* <Footer /> */}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
