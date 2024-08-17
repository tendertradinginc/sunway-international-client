"use client";

import Link from "next/link";
import { Button } from "../../ui/button";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

const NavItems = ({ className }) => {
  const pathname = usePathname();

  const navLinks = [
    { id: 1, url: "/test", label: "Test Page" },
    { id: 2, url: "#", label: "About Us" },
    { id: 3, url: "#", label: "Gallery" },
    { id: 4, url: "#", label: "Services" },
    { id: 5, url: "#", label: "Blog" },
    { id: 6, url: "/office-eqipments", label: "Products" },
  ];

  return (
    <div className={cn("flex items-center", className)}>
      {navLinks.map((link) => (
        <Button
          asChild
          variant="link"
          key={link.id}
          className={cn(pathname === link.url ? "underline" : "")}
        >
          <Link href={link.url}>{link.label}</Link>
        </Button>
      ))}
    </div>
  );
};

export default NavItems;
