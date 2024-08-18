import ConstructionService from "@/components/Home/ConstructionService/ConstructionService";
import CountUP from "@/components/Home/CountUp/CountUp";
import { Hero } from "@/components/Home/Hero/Hero";
import NewArrival from "@/components/Home/NewArrival/NewArrival";
import Services from "@/components/Home/NewArrival/Services";
import OurClients from "@/components/Home/OurClients/OurClients";
import ProjectShowcase from "@/components/Home/ProjectShowcase/ProjectShowcase";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import LatestOfficeEquipment from "@/components/Home/LatestOfficeEquipment/LatestOfficeEquipment";

export default function Home() {
  return (
    <div>
      <Hero />
      <NewArrival />
     <LatestOfficeEquipment/>
      <Services />
      <ConstructionService />
      <Testimonials />
      <ProjectShowcase />
      <CountUP />
      <OurClients />
     
    </div>
  );
}
