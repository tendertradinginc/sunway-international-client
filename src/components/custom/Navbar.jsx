import Link from "next/link";
import { Button } from "../ui/button";
import MaxWidthWrapper from "./MaxWidthWrapper";

const Navbar = () => {
  return (
    <nav className="py-2.5 border-b bg-si-secondary bg-opacity-20">
      <MaxWidthWrapper className="flex justify-between items-center">
        <Link href="/">
          <h3 className="text-2xl font-bold">Sunway International LTD.</h3>
        </Link>
        <div className="flex items-center">
          <Button asChild variant="link">
            <Link href="/test">Test Page</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="#">About Us</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="#">Gallery</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="#">Services</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="#">Blog</Link>
          </Button>
          <Button asChild variant="link">
            <Link href="#">Products</Link>
          </Button>
        </div>
      </MaxWidthWrapper>
    </nav>
  );
};

export default Navbar;
