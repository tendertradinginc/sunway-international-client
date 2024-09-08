import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { customLoader } from "@/utils/customLoader";
import Image from "next/image";
import Link from "next/link";
import { RiMenu3Line } from "react-icons/ri";
import MaxWidthWrapper from "../../custom/MaxWidthWrapper";
import NavItems from "./NavItems";

const Navbar = () => {
  return (
    <nav className="border-b py-2.5">
      <MaxWidthWrapper className="flex items-center justify-between">
        <Link href="/">
          <Image
            loader={customLoader}
            src="https://i.ibb.co/MZfwXL1/7-removebg-preview.png"
            width={80}
            height={80}
            alt=""
          />
        </Link>

        <div className="hidden md:block">
          <NavItems />
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <RiMenu3Line className="size-5" />
          </SheetTrigger>
          <SheetContent>
            <NavItems />
          </SheetContent>
        </Sheet>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
