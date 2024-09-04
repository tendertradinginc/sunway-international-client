import BannerCategory from "@/components/Home/BannerCategory/BannerCategory";
import ConstructionService from "@/components/Home/ConstructionService/ConstructionService";
import CountUP from "@/components/Home/CountUp/CountUp";
import { Hero } from "@/components/Home/Hero/Hero";
import MedicalEquipments from "@/components/Home/Medical Equipments/MedicalEquipments";
import NewArrival from "@/components/Home/NewArrival/NewArrival";
import Services from "@/components/Home/NewArrival/Services";
import OurClients from "@/components/Home/OurClients/OurClients";
import ProjectShowcase from "@/components/Home/ProjectShowcase/ProjectShowcase";
import Testimonials from "@/components/Home/Testimonials/Testimonials";
import AuthorizeDistribution from "@/components/Home/AuthorizeDistribution/AuthorizeDistribution";
import CompanyCertification from "@/components/Home/CompanyCertification/CompanyCertification";
import Chatbot from "@/components/Home/Chatbot/Chatbot";
import LatestHospitalFurniture from "@/components/Home/LatestHospitalFurniture/LatestHospitalFurniture";

export default function Home() {
  return (
    <div>
      <Hero />
      <BannerCategory />
      <NewArrival />
      <hr />
      <MedicalEquipments />
      <hr />
      <LatestHospitalFurniture />
      <hr />
      <Services />
      <hr />
      <ConstructionService />
      <hr />
      <CountUP />
      <hr />
      <Testimonials />
      <hr />
      <CompanyCertification />
      <hr />
      <ProjectShowcase />
      <hr />
      <AuthorizeDistribution />
      <hr />
      <OurClients />
      <hr />
      <Chatbot />
    </div>
  );
}
