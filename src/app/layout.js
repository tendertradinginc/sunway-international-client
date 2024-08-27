import { Open_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Twin Trade Int.",
  description: "Created by TTI Developers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <main className="min-h-screen">{children}</main>
        <Toaster richColors position="top-right" duration={1000} />
      </body>
    </html>
  );
}
