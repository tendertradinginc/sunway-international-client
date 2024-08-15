import { Hero } from "@/components/custom/Hero";
import Navbar from "@/components/custom/Navbar";
import Footer from "@/components/shared/Footer/Footer";


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <Footer />
    </main>
  );
}
