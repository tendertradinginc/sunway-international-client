import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-dvh">
      <Button asChild>
        <Link href="/test">Test Page</Link>
      </Button>
    </main>
  );
}
