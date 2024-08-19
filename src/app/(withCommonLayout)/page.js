import BannerCategory from "@/components/Home/BannerCategory/BannerCategory";
import ConstructionService from "@/components/Home/ConstructionService/ConstructionService";
import CountUP from "@/components/Home/CountUp/CountUp";
import { Hero } from "@/components/Home/Hero/Hero";
import LatestOfficeEquipment from "@/components/Home/LatestOfficeEquipment/LatestOfficeEquipment";
import MedicalEquipments from "@/components/Home/Medical Equipments/MedicalEquipments";
import NewArrival from "@/components/Home/NewArrival/NewArrival";
import Services from "@/components/Home/NewArrival/Services";
import OurClients from "@/components/Home/OurClients/OurClients";
import ProjectShowcase from "@/components/Home/ProjectShowcase/ProjectShowcase";
import Testimonials from "@/components/Home/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <BannerCategory />
      <NewArrival />
      <LatestOfficeEquipment />
      <Services />
      <CountUP />
      <MedicalEquipments />
      <ConstructionService />
      {/* <OfficeEquipment /> */}
      <Testimonials />
      <ProjectShowcase />
      <OurClients />
    </div>
  );
}
