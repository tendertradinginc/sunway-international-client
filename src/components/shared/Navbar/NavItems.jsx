"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CaretDownIcon } from "@radix-ui/react-icons";

const NavItems = ({ className }) => {
  const pathname = usePathname();

  const navLinks = [
    { id: 1, url: "/", label: "Home" },
    { id: 2, url: "/AboutUs", label: "About Us" },
    { id: 3, url: "/gallery", label: "Gallery" },
    { id: 4, url: "/services", label: "Services" },
    { id: 5, url: "/blog", label: "Blog" },
    // { id: 6, url: "/dashboard", label: "Dashboard" },
  ];

  return (
    <div className="flex flex-col items-center md:flex-row">
      <div className="flex flex-col items-center md:flex-row">
        {navLinks.map((link) => (
          <Button
            asChild
            variant="link"
            key={link.id}
            className={cn(pathname === link.url ? "underline" : "")}
          >
            <Link href={link.url} className="font-semibold">
              {link.label}
            </Link>
          </Button>
        ))}
      </div>

      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="link"
            className={cn(
              pathname === "/hospital-furniture" ||
                pathname === "/medical-equipment"
                ? "underline"
                : "",
            )}
          >
            Products <CaretDownIcon className="ml-1 size-5" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <Link href="/hospital-furniture">Hospital Furniture</Link>
          </DropdownMenuItem>

          <DropdownMenuItem asChild>
            <Link href="/medical-equipment">Medical Equipment</Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default NavItems;
