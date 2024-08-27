import BannerCategory from "@/components/Home/BannerCategory/BannerCategory";
import ConstructionService from "@/components/Home/ConstructionService/ConstructionService";
import CountUP from "@/components/Home/CountUp/CountUp";
import MedicalEquipments from "@/components/Home/Medical Equipments/MedicalEquipments";
import NewArrival from "@/components/Home/NewArrival/NewArrival";
import Services from "@/components/Home/NewArrival/Services";
import OurClients from "@/components/Home/OurClients/OurClients";
import ProjectShowcase from "@/components/Home/ProjectShowcase/ProjectShowcase";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import LatestOfficeEquipment from "@/components/Home/LatestOfficeEquipment/LatestOfficeEquipment";
import { Hero } from "@/components/Home/Hero/Hero";

import CompanyCertification from "@/components/Home/CompanyCertification/CompanyCertification";

import Chatbot from "@/components/Home/Chatbot/Chatbot";


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
      <Testimonials />
      <CompanyCertification />
      <ProjectShowcase />
      <OurClients />
      <Chatbot />
    </div>
  );
}
