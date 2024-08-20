
import { AiFillDatabase } from "react-icons/ai";
import SingleBlog from "./SingleBlog";


const BlogTable = async () => {
  const res = await fetch("http://localhost:5000/api/v1/blogs");
  const data = await res.json();
  const blogs = data?.data?.allBlogs;

    
 
  return (
    <div>
      <div className="min-h-[80vh]">
        <div className="container px-10 mx-auto">
          <br />
          <div className="w-full max-w-screen-lg mx-auto bg-white pb-10 ">
            <div className="overflow-x-auto sm:px-1 ">
              <div className="pb-6 flex justify-between items-center">
                <h2 className="text-si-primary font-semibold text-2xl ">
                  <AiFillDatabase className="inline mb-1"></AiFillDatabase>
                  Blog List
                </h2>
            
              </div>
              <hr />
              {/* {blogs?.length > 0 ? (
              
              ) : (
                <div className="text-center text-xl font-medium pt-32">
                  <p>No result found</p>
                </div>
              )} */}

              {  <table className="w-full table-auto">
                  <thead className="bg-gradient-to-r from-si-primary to-si-secondary  text-white">
                    <tr className="">
                      <th className="px-4 py-2">No</th>
                      <th className="px-4 py-2 text-left">Title</th>
                      <th className="px-4 py-2">Actions</th>
                    </tr>
                  </thead>

                  <tbody className="text-center">
                {  blogs?.map((blog, index) => (
                          <SingleBlog
                            key={index}
                            index={index}
                            data={blog}
                          ></SingleBlog>
                        ))}
                  </tbody>
                </table>}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogTable;
