import BlogCreateButton from "@/components/Dashboard/Blog/BlogCreateButton";
import BlogTable from "@/components/Dashboard/Blog/BlogTable";

const blogPage = () => {
  return <div className=" w-full p-5 md:p-10">
    <BlogCreateButton />
    <BlogTable />
  </div>;
};

export default blogPage;
