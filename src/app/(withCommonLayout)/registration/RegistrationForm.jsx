"use client"
import { createRef, useEffect } from "react";
import { useFormState } from "react-dom";

import { toast } from "sonner";
import ActionSubmitButton from "../action/ActionSubmitButton";
import { signUpUser } from "../action/authAction";

const RegistrationForm = () => {
    const ref = createRef();
    const [state, fromAction] = useFormState(signUpUser, null);
  
    useEffect(() => {
      if (state && state.success) {
        console.log(state);
        toast("successfully sign up");
        ref.current?.reset();
      }
    }, [state, ref]);
    return (
        <form ref={ref} action={fromAction}
        className="md:flex justify-center md:m-0 rounded-lg"
   
      >
        <div className="md:w-96 px-4 py-8  bg-white  shadow-2xl shadow-[#001955] rounded-lg">
          <div className="mb-3 ">
            <span className=" text-gray-600 font-semibold block mb-2 ">
              Full Name
            </span>
            <input
              placeholder=" Your name "
              required
              className="p-2 w-full  bg-white border border-gray-400 rounded-md "
              type="text"
              name="fullName"
            />
          </div>
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
              name="password"
              required
              className="p-2 w-full   bg-white border border-gray-400 rounded-md "
            />
          </div>
          <div>
          
          </div>
          <br />
          <div>
            <ActionSubmitButton></ActionSubmitButton>
          </div>
        </div>
       
      </form>
    );
};

export default RegistrationForm;