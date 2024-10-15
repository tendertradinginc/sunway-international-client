import Footer from "@/components/shared/Footer/Footer";
import Navbar from "@/components/shared/Navbar/Navbar";

export default function HomeLayout({ children }) {
  return (
    <div>
       <meta property="og:image" content="https://i.postimg.cc/cJgyCKvm/favicon.png" />
       <meta property="og:url" content="https://www.twintradeint.com/" />
      <Navbar />
      <div>{children}</div>
      <Footer />
    </div>
  );
}
