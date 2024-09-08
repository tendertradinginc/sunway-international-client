import AboutUs from "@/components/aboutUs/AboutUs";
import ContactUs from "@/components/contactUs/ContactUs";



const AboutUsPage = () => {
    return (
        <div className="bg-gradient-to-r from-green-100 to-white">
            <AboutUs />
            < hr />
            <ContactUs />
        </div>
    );
};

export default AboutUsPage;
