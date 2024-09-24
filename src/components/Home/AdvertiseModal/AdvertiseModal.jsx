"use client";

import { useEffect, useState } from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MdOutlineCancel } from "react-icons/md";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const AdvertiseModal = () => {
  const [count, setCount] = useState(0);
  const [isOpen, setIsopen] = useState(false);

    useEffect(() => {
      setTimeout(() => {
        if (count <= 1) {
          setCount(count + 1);
          if (count === 1) {
            setIsopen(true);
          }
         
        }
      }, 1000);
    }, [count]);
  return (
    <AlertDialog
      open={isOpen}
      onOpenChange={(open) => setIsopen(open)}
      className="m-0 p-0 bg-[#F1F6FF] data-[state=open]:border-none data-[state=open]:outline-none"
    >
      <AlertDialogTrigger asChild>
        {/* <Button variant="outline"></Button> */}
      </AlertDialogTrigger>
      <AlertDialogContent className="data-[state=open]:border-none data-[state=open]:outline-none m-0 max-w-5xl rounded-sm p-0 sm:rounded-sm md:overflow-y-hidden bg-[#F1F6FF]">
        <AlertDialogHeader>
          <AlertDialogTitle className="hidden"></AlertDialogTitle>
          <AlertDialogDescription className="hidden"></AlertDialogDescription>
          <div className="grid grid-cols-1 gap-4 px-4 py-2 md:grid-cols-5">
            <div className="hidden md:block col-span-5 md:col-span-2">
              <Image
                height={500}
                width={500}
                src={"https://i.postimg.cc/Kv206LCw/Rectangle-1.png"}
                alt="advertise banner image"
                className="h-full w-full rounded-sm"
              />
            </div>
            <div className="col-span-5 md:col-span-3">
              <div className="flex justify-end">
                <button onClick={() => setIsopen(false)} className="">
                  <MdOutlineCancel className="text-2xl text-si-primary" />
                </button>
              </div>
              <div className="text-center">
              <p className="text-xl font-semibold">Are You Planning To</p>
              <h1 className="text-si-primary  text-5xl my-5 font-semibold lg:leading-snug">Build A Quality Hospita In  Bangladesh</h1>
              <p>We're aimign to transform healthcare spaces while empowering patient care with excellence</p>
              <Link href="/" className="text-si-primary font-bold mt-8 inline-block">Explore More <FaArrowRight className="inline-block ml-2" /> </Link>
            </div>
            </div>
           
          </div>
        </AlertDialogHeader>
        <AlertDialogFooter></AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default AdvertiseModal;
