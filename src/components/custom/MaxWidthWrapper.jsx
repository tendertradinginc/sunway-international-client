import { cn } from "@/lib/utils";
const MaxWidthWrapper = ({ children, className }) => {
  return (
    <div
      className={cn("mx-auto w-full max-w-[1400px] px-5 md:px-10", className)}
    >
      {children}
    </div>
  );
};

export default MaxWidthWrapper;
