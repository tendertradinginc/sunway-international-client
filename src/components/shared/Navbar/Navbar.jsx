import Link from "next/link";
import MaxWidthWrapper from "../../custom/MaxWidthWrapper";
import NavItems from "./NavItems";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  return (
    <nav className="py-2.5 border-b bg-si-secondary bg-opacity-20">
      <MaxWidthWrapper className="flex justify-between items-center">
        <Link href="/">
          <h3 className="text-xl xl:text-2xl font-bold">
            Twin Trade Int.
          </h3>
        </Link>

        <div className="hidden md:block">
          <NavItems />
        </div>

        <Sheet>
          <SheetTrigger className="md:hidden">
            <RiMenu3Line className="size-5" />
          </SheetTrigger>
          <SheetContent>
            <NavItems/>
          </SheetContent>
        </Sheet>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
