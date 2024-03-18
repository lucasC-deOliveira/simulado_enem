import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simulado Enem",
  description: "App para simular o exame nacional do ensino médio do Brasil",
  
};
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={inter.className + " w-full  min-h-screen py-4 px-16"}
      >
        <Header />
        <div className="flex">
        {/* <aside className="flex items-center">
          <Navbar/>
        </aside> */}
        <main className="px-20 w-full">{children}</main>
        </div>
        <Footer/>
      </body>
    </html>
  );
}
