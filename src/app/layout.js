import { Open_Sans } from "next/font/google";
// import { Toaster } from "sonner";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Sunway International",
  description: "Created by TTI Developers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <main className="min-h-screen">{children}</main>
        {/* <Toaster richColors position="top-right" /> */}
        <Toaster position="top-center" reverseOrder={false} />
      </body>
    </html>
  );
}
