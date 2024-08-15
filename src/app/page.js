import Navbar from "@/components/custom/Navbar";
import NewArrival from "@/components/Home/NewArrival/NewArrival";
import Footer from "@/components/shared/Footer/Footer";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <NewArrival />
      <Footer />
    </main>
  );
}
