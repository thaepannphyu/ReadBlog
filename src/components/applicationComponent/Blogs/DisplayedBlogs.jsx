import PropTypes from "prop-types";
import CommentCount from "./CommentCount";



const DisplayedBlogs = ({ blogs }) => {
  
  return (
    <section className="text-gray-600  flex body-font overflow-hidden">
      <div className="container  px-10 py-10 mx-auto">
        <div className="flex flex-col gap-10 flex-wrap -m-12">
          {blogs?.length>0?blogs?.map((blog) => {
            return (
              <div
                key={blog.id}
                className="p-12 border-b-2 flex flex-col items-start">
                <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-indigo-500 text-xs font-medium tracking-widest">
                  Categorty
                </span>
                <h2 className="sm:text-3xl text-2xl title-font font-medium text-gray-900 mt-4 mb-4">
                  {blog.title}
                </h2>
                <p className="leading-relaxed mb-8 md:line-clamp-5 line-clamp-3">
                {blog.body}
                </p>
                <div className="flex items-center flex-wrap pb-4 mb-4  border-gray-100 mt-auto w-full">
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
                

                  <CommentCount blogId={blog.id}/>
                  
                  
                </div>
                <a className="inline-flex items-center ">
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
                </a>
              </div>
            );
          }):<div className=" text-center">  NO result found</div>}
        </div>
      
      </div>
    </section>
  );
};

export default DisplayedBlogs;

DisplayedBlogs.propTypes = {
  blogs: PropTypes.array.isRequired,
};
