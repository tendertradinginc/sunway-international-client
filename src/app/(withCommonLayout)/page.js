// import AuthorizeDistribution from "@/components/Home/AuthorizeDistribution/AuthorizeDistribution";
import AuthorizeDistributors from "@/components/Home/AuthorizeDistribution/AuthorizeDistributors";
import Chatbot from "@/components/Home/Chatbot/Chatbot";
// import CompanyCertification from "@/components/Home/CompanyCertification/CompanyCertification";
import ConstructionService from "@/components/Home/ConstructionService/ConstructionService";
import CountUP from "@/components/Home/CountUp/CountUp";
import FeatureProject from "@/components/Home/FeatureProject/FeatureProject";
import { Hero } from "@/components/Home/Hero/Hero";
import LatestHospitalFurniture from "@/components/Home/LatestHospitalFurniture/LatestHospitalFurniture";
import MedicalEquipments from "@/components/Home/Medical Equipments/MedicalEquipments";
import NewArrival from "@/components/Home/NewArrival/NewArrival";
import Services from "@/components/Home/NewArrival/Services";
import OurAchievement from "@/components/Home/OurAchievement/OurAchievement";
import OurClients from "@/components/Home/OurClients/OurClients";
import Testimonials from "@/components/Home/Testimonials/Testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      {/* <BannerCategory /> */}

      <MedicalEquipments />

      <LatestHospitalFurniture />
      <CountUP />

      <Services />

      <NewArrival />
      <ConstructionService />

      <OurAchievement />

      {/* <CompanyCertification /> */}

      <FeatureProject></FeatureProject>
      {/* <ProjectShowcase /> */}

      <Testimonials />

      {/* <AuthorizeDistribution /> */}
      <AuthorizeDistributors />

      <OurClients />

      <Chatbot />
    </div>
  );
}
