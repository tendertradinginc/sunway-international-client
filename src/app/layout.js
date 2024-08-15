import { Open_Sans } from "next/font/google";
import "./globals.css";

const openSans = Open_Sans({display:"swap"});

export const metadata = {
  title: "Sunway International",
  description: "Created by TTI Developers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        {children}
        </body>
    </html>
  );
}
