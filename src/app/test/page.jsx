import { Button } from "@/components/ui/button";
import { HomeIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import React from "react";

const TestPage = () => {
  return (
    <section className="flex flex-wrap flex-col justify-center items-center gap-5 min-h-screen my-10">
      <h3 className="text-center text-xl font-semibold">Button variants</h3>

      <div className="flex flex-wrap justify-center items-center gap-2">
        <Button variant="link" asChild>
          <Link href="/">Home</Link>
        </Button>
        <Button>Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button className="hover:bg-si-secondary hover:text-si-text">
          Custom
        </Button>
        <Button variant="ghost" size="icon" asChild>
          <Link href="/">
            <HomeIcon />
          </Link>
        </Button>
      </div>

      <h3 className="text-center text-xl font-bold italic">Color variants</h3>

      <section className="flex flex-wrap justify-center items-center gap-2 w-full">
        <div className="bg-primary size-40 rounded-lg flex flex-wrap justify-center items-center">
          Shadcn Primary
        </div>
        <div className="bg-secondary size-40 rounded-lg flex flex-wrap justify-center items-center">
          Shadcn Secondary
        </div>
        <div className="bg-destructive size-40 rounded-lg flex flex-wrap justify-center items-center">
          Shadcn Destructive
        </div>
        <div className="bg-si-primary size-40 rounded-lg flex flex-wrap justify-center items-center">
          Custom Primary
        </div>
        <div className="bg-si-secondary size-40 rounded-lg flex flex-wrap justify-center items-center">
          Custom Secondary
        </div>
        <div className="bg-si-accent size-40 rounded-lg flex flex-wrap justify-center items-center">
          Custom Accent
        </div>
      </section>
    </section>
  );
};

export default TestPage;
