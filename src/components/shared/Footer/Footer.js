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
      className="w-full bg-cover bg-no-repeat"
    >
      <div className="bg-[#0c0d0df6]">
        <MaxWidthWrapper>
          <div className="flex flex-wrap gap-x-28 gap-y-10 py-10">
            {/* First Column */}
            <ul className="flex flex-col gap-3">
              <li className="flex gap-2 text-3xl font-bold text-gray-300">
                <Image
                  height={50}
                  width={100}
                  alt="Twin Trade Int. logo footer"
                  src="https://i.ibb.co/MZfwXL1/7-removebg-preview.png"
                />{" "}
                Twind
                <br /> Trade Int
              </li>
              <li className="max-w-80">
                <p className="mt-5 font-medium leading-7 text-gray-300">
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
              <li className="mt-5">
                <Link href="/registration" className="text-secondary">
                  Registration
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
              <li className="text-2xl font-bold text-gray-300">
                Contact Information
              </li>
              <li className="max-w-80">
                {" "}
                <p className="mt-5 font-medium leading-7 text-secondary">
                  You Can Always contact with us via email or phone. Get in
                  touch with contact and get a quote form
                </p>
              </li>
              <li className="mt-5 flex gap-x-3 text-secondary">
                <FaHome className="mt-1 text-xl text-gray-300" />
                No. 58A, East Medison Street, <br /> Batilmor, MD, USA 480
              </li>
              <li className="flex gap-x-3 text-secondary">
                <IoCall className="mt-1 text-xl text-gray-300" />
                +880 1777452341
              </li>
              <li className="flex gap-x-3 text-secondary">
                <IoMdMail className="mt-1 text-xl text-gray-300" />
                sunwayInternation@gmail.com
              </li>
            </ul>

            {/* Socials */}
            <ul className="flex flex-col gap-y-3">
              <li className="text-2xl font-bold text-gray-300">Socials</li>
              <Image
                className="mt-2"
                height={50}
                width={220}
                alt="Twin Trade Int. logo footer"
                src="https://i.postimg.cc/Pfbh7MmL/download-removebg-preview.png"
              />
              <li className="mt-5 flex gap-4">
                <Link href="#">
                  {" "}
                  <div className="rounded-sm bg-white p-1">
                    <FaFacebook className="text-2xl text-primary" />
                  </div>
                </Link>
                <Link href="#">
                  {" "}
                  <div className="rounded-sm bg-white p-1">
                    <FaLinkedinIn className="text-2xl text-primary" />
                  </div>
                </Link>
                <Link href="#">
                  {" "}
                  <div className="rounded-sm bg-white p-1">
                    <FaInstagram className="text-2xl text-primary" />
                  </div>
                </Link>
                <Link href="#">
                  {" "}
                  <div className="rounded-sm bg-white p-1">
                    <FaXTwitter className="text-2xl text-primary" />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </MaxWidthWrapper>
        <div className="border-t border-secondary p-5">
          <h1 className="text-center font-semibold text-gray-300">
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
