import { Hero } from "@/components/Home/Hero/Hero";
import NewArrival from "@/components/Home/NewArrival/NewArrival";
import Services from "@/components/Home/NewArrival/Services";
import OurClients from "@/components/Home/OurClients/OurClients";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrival />
      <Services />
      <Testimonials/>
      <OurClients />
      <Footer />
    </div>
  );
}
