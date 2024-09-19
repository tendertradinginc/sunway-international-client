"use client";

import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useDebounce } from "use-debounce";

const Search = ({ category, pageName }) => {
  const router = useRouter();
  const [text, setText] = useState("");
  const [query] = useDebounce(text, 1000);

  useEffect(() => {
    if (!query) {
      router.push(`/${pageName}/${category}`);
    } else {
      router.push(`/${pageName}/${category}?search=${query}`);
    }

  
  }, [query, router]);
  return (
    <div>
      <Input
        type="text"
        name="search"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Search For Products..."
        className="max-w-[185px] bg-background lg:max-w-[250px]"
      />
    </div>
  );
};

export default Search;
