"use client"
import { AiFillDatabase } from "react-icons/ai";
import BlogCreateButton from "./BlogCreateButton";
import SingleBlog from "./SingleBlog";
import { useState } from "react";

const BlogTable = () => {
  const [loading, setLoading] = useState(0);

    const blogs = [
        {
  
            name: "FH Plastic Industry",
        },
        {
         
            name: "FH Plastic Industry",
        },
        {
            name: "FH Plastic Industry",
        }
       
    ];
 
  return (
    <div>
      <div className="min-h-[80vh] ">
        <div className="container px-10 mx-auto">
          <br />
          <div className="w-full max-w-screen-lg mx-auto bg-white pb-10 ">
            <div className="overflow-x-auto sm:px-1 ">
              <div className="pb-6 flex justify-between items-center">
                <h2 className="text-si-primary font-semibold text-2xl ">
                  <AiFillDatabase className="inline mb-1"></AiFillDatabase>
                  Blog List
                </h2>
                <div className="flex items-center justify-between mt-4 px-2">
                  <div>
                  <BlogCreateButton />
                  </div>
                </div>
              </div>
              <hr />
              {blogs?.length > 0 ? (
                <table className="w-full table-auto">
                  <thead className="bg-gradient-to-r from-si-primary to-si-secondary  text-white">
                    <tr className="">
                      <th className="px-4 py-2">No</th>
                      <th className="px-4 py-2">Title</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="text-center">
                    {loading
                      ? skeleton?.map((item, idx) => (
                          <tr className="mb-10 gap-5" key={idx}>
                            <td
                              colSpan={3}
                              className={`w-full animate-pulse h-14 rounded-sm ${
                                idx % 2 == 0 ? "bg-gray-200 " : "bg-white "
                              }`}
                            ></td>
                          </tr>
                        ))
                      : blogs?.map((blog, index) => (
                          <SingleBlog
                            key={blogs?._id}
                            index={index}
                            data={blog}
                          ></SingleBlog>
                        ))}
                  </tbody>
                </table>
              ) : (
                <div className="text-center text-xl font-medium pt-32">
                  <p>No result found</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTable;
