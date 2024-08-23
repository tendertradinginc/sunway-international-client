import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaHome, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { IoMdMail } from "react-icons/io";
import { IoCall } from "react-icons/io5";
import MaxWidthWrapper from "../../custom/MaxWidthWrapper";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: "url('https://i.postimg.cc/xdsS0MDy/dna-Footer.png')",
      }}
      className=" w-full bg-cover bg-no-repeat"
    >
      <div className="bg-[#0c0d0df6]">
        <MaxWidthWrapper>
          <div className="flex gap-x-28 gap-y-10 flex-wrap py-10">
            {/* First Column */}
            <ul className="flex flex-col gap-3 ">
              <li className="text-gray-300 text-3xl font-bold flex gap-2">
                <Image
                  height={50}
                  width={100}
                  alt="Twin Trade Int. logo footer"
                  src="https://i.postimg.cc/8C7Cvrf1/imagessunwayfakelogo-removebg-preview.png"
                />{" "}
                Twind 
                 <br /> Trade Int
              </li>
              <li className="max-w-80 ">
                <p className="font-medium text-gray-300 mt-5 leading-7">
                  We Reamin true to the same priciples on which our company was
                  founded over a hundred years ago; providing superior service
                  to our clients, putting safty first, creating opportunities
                  for the people.
                </p>
              </li>
            </ul>

            {/* Second Column */}
            <ul className="flex flex-col gap-y-3">
              <li className="text-2xl font-bold text-gray-300">Links</li>
              <li className="mt-5">
                <Link href="/login" className="text-secondary">
                 Login
                </Link>
              </li>
              <li className="">
                <Link href="/about-us" className="text-secondary">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-secondary">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-secondary">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-secondary">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-secondary">
                  Products
                </Link>
              </li>
            </ul>

            {/* Third Column */}
            <ul className="grid gap-y-3">
              <li className="text-gray-300 text-2xl font-bold">
                Contact Information
              </li>
              <li className="max-w-80">
                {" "}
                <p className="font-medium text-secondary mt-5 leading-7">
                  You Can Always contact with us via email or phone. Get in
                  touch with contact and get a quote form
                </p>
              </li>
              <li className="flex gap-x-3 text-secondary mt-5">
                <FaHome className="text-gray-300 mt-1 text-xl" />
                No. 58A, East Medison Street, <br /> Batilmor, MD, USA 480
              </li>
              <li className="flex gap-x-3 text-secondary ">
                <IoCall className="text-gray-300 mt-1 text-xl" />
                +880 1777452341
              </li>
              <li className="flex gap-x-3 text-secondary ">
                <IoMdMail className="text-gray-300 mt-1 text-xl" />
                sunwayInternation@gmail.com
              </li>
            </ul>

            {/* Socials */}
            <ul className="flex flex-col gap-y-3">
              <li className="text-gray-300 text-2xl font-bold">Socials</li>
              <Image
                className="mt-2"
                height={50}
                width={220}
                alt="Twin Trade Int. logo footer"
                src="https://i.postimg.cc/Pfbh7MmL/download-removebg-preview.png"
              />
              <li className="flex gap-4 mt-5">
                <Link href="#">
                  {" "}
                  <div className="bg-white p-1 rounded-sm">
                    <FaFacebook className="text-primary text-2xl" />
                  </div>
                </Link>
                <Link href="#">
                  {" "}
                  <div className="bg-white p-1 rounded-sm">
                    <FaLinkedinIn className="text-primary text-2xl" />
                  </div>
                </Link>
                <Link href="#">
                  {" "}
                  <div className="bg-white p-1 rounded-sm">
                    <FaInstagram className="text-primary text-2xl" />
                  </div>
                </Link>
                <Link href="#">
                  {" "}
                  <div className="bg-white p-1 rounded-sm">
                    <FaXTwitter className="text-primary text-2xl" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </MaxWidthWrapper>
        <div className="p-5 border-t border-secondary">
          <h1 className="text-center text-gray-300 font-semibold">
            {" "}
            sunwayinternational.com &copy; Designed & Developed by
            Tender-Trading-Inc.
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Footer;
