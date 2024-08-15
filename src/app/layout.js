import { Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Home/Navbar/Navbar";

const openSans = Open_Sans({ display: "swap" });

export const metadata = {
  title: "Sunway International",
  description: "Created by TTI Developers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <main className="min-h-screen">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
