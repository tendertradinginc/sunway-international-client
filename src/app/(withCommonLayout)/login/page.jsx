"use client"

import { Button } from "@/components/ui/button";

const loginPage = () => {
    return (
        <div className="bg-secondary py-5 pt-20 " >
          <div style={{ height: "calc(100vh - 150px)" }} className="relative">
            <div className="flex justify-center items-center h-full absolute w-full z-10">
              <form
                className="md:flex justify-center md:m-0 rounded-lg"
           
              >
                <div className="md:w-96 px-4 py-8  bg-white  shadow-2xl shadow-[#001955] rounded-lg">
                  <div className="mb-3 ">
                    <span className=" text-gray-600 font-semibold block mb-2 ">
                      Email
                    </span>
                    <input
                      placeholder=" Your email "
                      required
                      className="p-2 w-full  bg-white border border-gray-400 rounded-md "
                      type="email"
                      name="email"
                    />
                  </div>
                  <div className="mb-3 ">
                    <span className=" text-gray-600 font-semibold block mb-2">
                      Password
                    </span>
                    <input
                      placeholder="Password"
                      type="password"
                      required
                      className="p-2 w-full   bg-white border border-gray-400 rounded-md "
                    />
                  </div>
                  <br />
                  <div>
                   <Button > Login</Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      );
    };
    
export default loginPage;