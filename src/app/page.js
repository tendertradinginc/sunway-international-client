import { Hero } from "@/components/Home/Hero/Hero";
import NewArrival from "@/components/Home/NewArrival/NewArrival";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrival />
      <Footer />
    </div>
  );
}
