import AdvertiseModal from "@/components/Home/AdvertiseModal/AdvertiseModal";
import AuthorizeDistributors from "@/components/Home/AuthorizeDistributior/AuthorizeDistributors";
import Chatbot from "@/components/Home/Chatbot/Chatbot";
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
        <AdvertiseModal />
      <Hero />
      {/* <BannerCategory /> */}
      <NewArrival />
      <MedicalEquipments />

      <LatestHospitalFurniture />
      

      <Services />

      
      <ConstructionService />

      <OurAchievement />


      <FeatureProject></FeatureProject>


      <Testimonials />



      <AuthorizeDistributors />


      <OurClients />
      <CountUP />
      <Chatbot />
    
    </div>
  );
}
