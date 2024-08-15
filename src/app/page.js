import { Hero } from "@/components/custom/Hero";
import Navbar from "@/components/custom/Navbar";
import NewArrival from "@/components/Home/NewArrival/NewArrival";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <Hero />
      <NewArrival />
      <Footer />
    </main>
  );
}
