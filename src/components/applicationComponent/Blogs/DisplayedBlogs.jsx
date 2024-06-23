import PropTypes from "prop-types";
import CommentCount from "./CommentCount";
import { nanoid } from "@reduxjs/toolkit";
import { useAuthUserQuery } from "../../../App/Auth/Auth";
import { useEffect, useState } from "react";

const DisplayedBlogs = ({ blogs }) => {
  const { data: AuthUser } = useAuthUserQuery();
  const [owner, setOwner] = useState(0);

  useEffect(() => {
    setOwner(AuthUser?.data?.user);
  }, [AuthUser]);

  return (
    <section className="text-gray-600 container mx-auto px-6  bg-gray-50 max-w-[78%] py-5   flex body-font overflow-hidden">
      <div className="container  px-10 py-10 mx-auto">
        <div className="flex flex-col gap-10 flex-wrap -m-12">
          {blogs?.length > 0 ? (
            blogs?.map((blog) => {
            
              return (
                <div
                  key={blog.id}
                  className="p-12 gap-5 border-b-2 flex flex-col items-start">
                  <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                    {blog.title}
                  </h2>
                  <p className="leading-relaxed mb-8 md:line-clamp-5 line-clamp-3">
                    {blog.body}
                  </p>
                  <div className=" flex flex-wrap gap-3">
                    {blog?.category.map((category) => {
                      return (
                        <span
                          key={nanoid()}
                          className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                          # {category?.name}
                        </span>
                      );
                    })}
                  </div>
                  <div className="flex  items-center flex-wrap pb-4 mb-4  border-gray-100 mt-auto w-full">
                    <a className="text-indigo-500 inline-flex items-center">
                      Learn More
                      <svg
                        className="w-4 h-4 ml-2"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round">
                        <path d="M5 12h14" />
                        <path d="M12 5l7 7-7 7" />
                      </svg>
                    </a>
                    <span className="text-gray-400 mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                      <svg
                        className="w-4 h-4 mr-1"
                        stroke="currentColor"
                        strokeWidth={2}
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        viewBox="0 0 24 24">
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx={12} cy={12} r={3} />
                      </svg>
                      1.2K
                    </span>

                    <CommentCount blogId={blog.id} />
                  </div>
                  <a className=" items-center flex w-full ">
                    <img
                      alt="blog"
                      src="https://dummyimage.com/104x104"
                      className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center"
                    />
                    <span className="flex-grow flex flex-col pl-4">
                      <span className="title-font font-medium text-gray-900">
                        User Name
                      </span>
                      <span className="text-gray-400 text-xs tracking-widest mt-0.5">
                        User Job
                      </span>
                    </span>

                    {owner?.id==blog?.author?.id?(<a href={`../blog/${blog.id}/edit`} className=" flex self-end">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="size-6">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M12 6.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 12.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5ZM12 18.75a.75.75 0 1 1 0-1.5.75.75 0 0 1 0 1.5Z"
                        />
                      </svg>
                      Edit
                    </a>):""}

                    
                  </a>
                </div>
              );
            })
          ) : (
            <div className=" text-center"> NO result found</div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DisplayedBlogs;

DisplayedBlogs.propTypes = {
  blogs: PropTypes.array.isRequired,
};
