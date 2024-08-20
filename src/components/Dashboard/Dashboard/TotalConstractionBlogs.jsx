import React from 'react';
import { SiBlogger } from "react-icons/si";

const TotalConstructionBlogs = () => {
    return (
        <div>
            {/* category 1 */}
            <div className="flex justify-center items-center flex-col h-36 duration-500 hover:bg-gradient-to-r from-[#fbbe24d3]  to-[#faca5083] text-white border-2">
                <SiBlogger className="text-6xl text-si-primary mb-2" />
                <h1 className=" text-center text-black text-md font-semibold">Walking Aids Series</h1>
            </div>
        </div>
    );
};

export default TotalConstructionBlogs;