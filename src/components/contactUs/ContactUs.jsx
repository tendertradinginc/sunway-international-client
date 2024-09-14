"use client"
import { useState } from "react";
import { FaFacebook, FaHome, FaLinkedin, FaPhoneSquare, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import SectionTitle from "../shared/SectionTitle/SectionTitle";

const ContactUs = () => {
    const [commentData, setCommentData] = useState({
        comment: "",
        name: "",
        email: "",
        url: "",
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setCommentData({
            ...commentData,
            [name]: value,
        });
    };

    const handleAddComment = (event) => {
        event.preventDefault();

        // Optionally, clear the form after logging the data
        setCommentData({
            comment: "",
            name: "",
            email: "",
            url: "",
        });
    };

    return (
        <section id="contact-section" className="mt-16 bg-[#F6F6F6]">
            <div className="max-w-5xl mx-auto  flex flex-col lg:flex-row justify-center items-center  gap-5 ">

                <div className="flex-1 flex flex-col justify-center items-start p-6">
                    <h1 className="text-4xl font-bold text-si-primary mb-6">Contact Us</h1>
                    <ul className="space-y-2 text-left lg:text-lg font-medium">
                        <h2 className="text-lg mb-6">Email, call, or  complete the form to learn how snappy can solve your messaging problem.</h2>
                        <li>
                            <h1 className="flex items-center gap-3">
                                <FaLocationDot className="text-base text-si-primary" />
                                Dhaka, Bangladesh
                            </h1>
                        </li>
                        <li>
                            <h1 className="flex items-center gap-3">
                                <FaHome className="text-base text-si-primary" />
                                27 Saptak Square, Dhanmondi.
                            </h1>
                        </li>
                        <li>
                            <h1 className="flex items-center gap-3">
                                <FaPhoneSquare className="text-base text-si-primary" />
                                +880 1894982978
                            </h1>
                        </li>
                        <li>
                            <h1 className="flex items-center gap-3">
                                <MdEmail className="text-base text-si-primary" />
                                twintradeint@gmail.com
                            </h1>
                        </li>
                    </ul>
                    <div className="text-si-primary flex flex-col items-start mt-6">
                        <div className="flex items-center gap-4">
                            <a
                                href="https://www.linkedin.com/company/tendertradinginc/mycompany/"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaLinkedin className="text-2xl" />
                            </a>
                            <a
                                href="https://www.facebook.com/tendertradinginc"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaFacebook className="text-2xl" />
                            </a>
                            <a
                                href="https://www.youtube.com/@TenderTradingInc"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <FaYoutube className="text-4xl" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="my-16 flex-1 bg-white rounded-lg p-10">
                    {/* <h2 className="text-base font-semibold text-start lg:pb-4 p-4">
                        We cannot solve your problem if you do not tell us about it!{" "}
                    </h2> */}
                    <h1 className="text-2xl font-semibold text-start mb-2">
                        Get in Touch
                    </h1>
                    <h2 className="text-base font-semibold text-start mb-4">
                        You can reach us anytime
                    </h2>
                    <form
                        onSubmit={handleAddComment}
                        className="max-w-5xl mx-auto rounded-lg lg:p-0 p-6"
                    >
                        <div className="mb-4">
                            <label className="sr-only">Name</label>
                            <input
                                name="name"
                                type="text"
                                value={commentData.name}
                                onChange={handleInputChange}
                                placeholder="Name"
                                size="30"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-si-secondary focus:border-si-secondary"
                            ></input>
                        </div>
                        <div className="mb-4">
                            <label className="sr-only">Email</label>
                            <input
                                type="email"
                                name="email"
                                value={commentData.email}
                                onChange={handleInputChange}
                                placeholder="Your Email"
                                size="30"
                                required
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1 focus:ring-si-secondary focus:border-si-secondary"
                            />
                        </div>
                        <div className="mb-4">
                            <label className="sr-only">Website</label>
                            <input
                                name="url"
                                type="text"
                                value={commentData.url}
                                onChange={handleInputChange}
                                placeholder="Website"
                                size="30"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1  focus:ring-si-secondary focus:border-si-secondary"
                            ></input>
                        </div>
                        <div className="mb-4">
                            <label htmlFor="comment" className="sr-only">
                                Type here..
                            </label>
                            <textarea
                                id="comment"
                                name="comment"
                                value={commentData.comment}
                                onChange={handleInputChange}
                                placeholder="Type here.."
                                cols="45"
                                rows="8"
                                required
                                aria-required="true"
                                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-1  focus:ring-si-secondary focus:border-si-secondary"
                            ></textarea>
                        </div>
                        <div>
                            <input
                                type="submit"
                                className="w-full px-3 py-2 text-white font-bold bg-si-primary rounded-lg cursor-pointer hover:bg-si-secondary"
                                value="Submit"
                            ></input>
                        </div>
                    </form>
                </div>

            </div >
        </section >
    );
};

export default ContactUs;
