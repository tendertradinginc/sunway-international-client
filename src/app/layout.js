import { Open_Sans } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";
import Head from "next/head";

const openSans = Open_Sans({ subsets: ["latin"], display: "swap" });

export const metadata = {
  title: "Twin Trade Int.",
  description: "Created by TTI Developers.",
  // openGraph: {
  //   images: ['https://i.postimg.cc/cJgyCKvm/favicon.png'],
  // },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <meta
          property="og:image"
          content="https://i.postimg.cc/cJgyCKvm/favicon.png"
        />
        <meta property="og:url" content="https://www.twintradeint.com" />
      </Head>
      <body className={openSans.className}>
        <main className="min-h-screen">{children}</main>
        <Toaster richColors position="top-right" duration={1000} />
      </body>
    </html>
  );
}
