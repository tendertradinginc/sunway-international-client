import ConstructionService from "@/components/ConstructionService/ConstructionService";
import CountUP from "@/components/Home/CountUp/CountUp";
import { Hero } from "@/components/Home/Hero/Hero";
import NewArrival from "@/components/Home/NewArrival/NewArrival";
import Services from "@/components/Home/NewArrival/Services";
import OurClients from "@/components/Home/OurClients/OurClients";
import ProjectShowcase from "@/components/Home/ProjectShowcase/ProjectShowcase";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrival />
      <Services />
      <ConstructionService />
      <Testimonials/>
      <ProjectShowcase />
      <CountUP />
      <OurClients />
      <Footer />
    </div>
  );
}
