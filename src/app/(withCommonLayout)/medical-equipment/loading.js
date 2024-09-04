import { CgSpinner } from "react-icons/cg";

export default function Loading() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center">
      <CgSpinner className="size-20 animate-spin" />
    </div>
  );
}
