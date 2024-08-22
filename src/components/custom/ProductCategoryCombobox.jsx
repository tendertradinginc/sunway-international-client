"use client"
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useEffect, useState } from "react";

export function ProductCategoryCombobox({ value, setValue }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  // const categories = [
  //   { _id: "1", name: "Hospital Beds" },
  //   { _id: "2", name: "Wheelchairs" },
  //   { _id: "3", name: "Surgical Instruments" },
  //   { _id: "4", name: "Medical Monitors" },
  //   { _id: "5", name: "Diagnostic Devices" },
  // ];
  useEffect(() => {
    setLoading(true);
    fetch("http://localhost:5000/api/v1/medical-category")
      .then((res) => res.json())
      .then((data) => {
        setLoading(false);
        setCategories(data.data.result)
        console.log(data.data.result);
      });
  }, [loading]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? categories.find((category) => category.name === value)?.name
            : "Select Category"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category" className="h-9" />
          <CommandEmpty>No category found.</CommandEmpty>
          <CommandList>
            <CommandGroup>
              {categories.map((category) => (
                <CommandItem
                  key={category._id}
                  value={category.name}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    setOpen(false);
                  }}
                >
                  {category.name}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      value === category.name ? "opacity-100" : "opacity-0",
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
