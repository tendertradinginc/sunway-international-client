import BlogCreateButton from "@/components/Dashboard/Blog/BlogCreateButton";
import BlogTable from "@/components/Dashboard/Blog/BlogTable";

const blogPage = () => {
  return <div className=" w-full">
    <BlogCreateButton />
    <BlogTable />
  </div>;
};

export default blogPage;
