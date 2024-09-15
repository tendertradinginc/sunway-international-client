"use client"

import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { AiTwotoneMail } from "react-icons/ai";
import { IoLocationOutline } from "react-icons/io5";
import { Button } from "../ui/button";
import { PhoneIcon } from "lucide-react";



const ContactDialog = () => {
    return (
        <div>

            <Dialog>
                <DialogTrigger className="bg-si-primary flex items-center flex-wrap text-white p-[6px] px-4 rounded-md">
                    <p className="">
                        Contact For Price <PhoneIcon className="ml-2 size-5 inline-block" />
                    </p>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Contact Us</DialogTitle>
                        <DialogDescription className="p-10">
                            <div className="flex gap-3">
                                <PhoneIcon className="ml-2 size-5" /> Hotline: +880 1700978687
                            </div> <br />
                            <div className="flex gap-3">
                                <AiTwotoneMail className="ml-2 size-5" />
                                Email: twintradeinternational@gmail.com
                            </div>  <br />
                            <div className="flex gap-3">
                                <IoLocationOutline className="ml-2 size-7" />
                                Address: HM Plaza, (13th Floor) Sector-03, Uttara, Dhaka-1230
                            </div>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>
        </div>
    );
};

export default ContactDialog;