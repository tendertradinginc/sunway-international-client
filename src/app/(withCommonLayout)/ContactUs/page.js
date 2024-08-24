"use client"
import { useState } from "react";
import { FaFacebook, FaHome, FaLinkedin, FaPhoneSquare, FaYoutube } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

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
        <section className="my-10">
            <div className="max-w-6xl mx-auto">
                <h1 className=" text-3xl md:text-5xl font-semibold text-si-primary py-8 px-4">
                    Contact Us
                </h1>
            </div>
            <div className="bg-secondary">
                <div className="max-w-6xl mx-auto  flex flex-col lg:flex-row justify-center items-start lg:items-stretch gap-5 lg:gap-10">
                    <div className="py-10 flex-1">
                        <h2 className="text-base font-semibold text-start pb-4">
                            We cannot solve your problem if you do not tell us about it!{" "}
                        </h2>
                        <form
                            onSubmit={handleAddComment}
                            className="max-w-5xl mx-auto rounded-lg"
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

                    <div className="flex-1 py-20">
                        <ul className="space-y-3 text-left lg:text-lg font-medium">
                            <li>
                                <h1 className="flex items-center gap-3">
                                    <FaLocationDot className="text-xl text-si-primary" />
                                    Dhaka, Bangladesh
                                </h1>
                            </li>
                            <li>
                                <h1 className="flex items-center gap-3">
                                    <FaHome className="text-xl text-si-primary" />
                                    27 Saptak Square, Dhanmondi.
                                </h1>
                            </li>
                            <li>
                                <h1 className="flex items-center gap-3">
                                    <FaPhoneSquare className="text-xl text-si-primary" />
                                    +880 1894982978
                                </h1>
                            </li>
                            <li>
                                <h1 className="flex items-center gap-3">
                                    <MdEmail className="text-xl text-si-primary" />
                                    sunway-international@gmail.com
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
                                    <FaLinkedin className="text-4xl" />
                                </a>
                                <a
                                    href="https://www.facebook.com/tendertradinginc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaFacebook className="text-4xl" />
                                </a>
                                <a
                                    href="https://www.youtube.com/@TenderTradingInc"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <FaYoutube className="text-5xl" />
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactUs;
