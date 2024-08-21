"use client"
import { AiFillDatabase } from "react-icons/ai";
import SingleBlog from "./SingleBlog";
import BlogCreateButton from "./BlogCreateButton";
import PaginationBlog from "../../shared/pagination/PaginationShadcn";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { toast } from "sonner";


const BlogTable =  () => {
const searchParams = useSearchParams()
const [loading, setLoading] = useState(true)
const [blogs, setBlogs] = useState([])
const [page, setPage] = useState(searchParams.get('page' || 1))
const [limit, setLimit] = useState(searchParams.get('limit' || 10))
const [totalBlog, setTolatBlog] = useState(0)


useState(()=>{
  fetch(`http://localhost:5000/api/v1/blogs?page=${page}&limit=${limit}`)
  .then(res => res.json())
  .then(data => {
    setBlogs(data?.data?.allBlogs)
    setTolatBlog(data?.data?.totlaBlogs)
    setLoading(false)
 
  })
  .catch(err => toast.error(err.message))
},[page, limit])

const totalPage = Math.ceil(totalBlog / limit)
console.log(totalPage)

  return (
    <div>
      <div className="min-h-[80vh]">
        <div className="container mx-auto px-10">
          <br />
          <div className="mx-auto w-full max-w-screen-lg bg-white pb-10">
            <div className="overflow-x-auto sm:px-1">
              <div className="flex items-center justify-between pb-6">
                <h2 className="text-2xl font-semibold text-si-primary">
                  <AiFillDatabase className="mb-1 inline"></AiFillDatabase>
                  Blog List
                </h2>
                <BlogCreateButton />
              </div>
              <hr />
              {/* {blogs?.length > 0 ? (
              
              ) : (
                <div className="text-center text-xl font-medium pt-32">
                  <p>No result found</p>
                </div>
              )} */}

              { 
                <table className="w-full table-auto">
                  <thead className="border-2 border-si-primary bg-si-primary text-white">
                    <tr className="">
                      <th className="px-4 py-2">No</th>
                      <th className="px-4 py-2 text-left">Title</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="border text-center">
                    {blogs?.length > 0 ?  blogs?.map((blog, index) => (
                      <SingleBlog
                        key={index}
                        index={index}
                        data={blog}
                      ></SingleBlog>
                    )) : Array.from({ length: 10 }).map((_, idx)=><tr  key={idx} className={`h-10 w-full ${idx%2==0 ? "bg-secondary":""} `}>
                      <td className="col" colSpan={4}></td>
                    </tr>)}
                  </tbody>
                </table>
              }
            </div>
           {!loading && <div className="mt-5">
            <PaginationBlog data={{setPage, page, limit, totalPage}} />
            </div>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTable;
