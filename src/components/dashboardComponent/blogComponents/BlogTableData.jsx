import PropTypes from "prop-types";
import { useDeleteBlogsMutation } from "../../../App/Blog/BlogApi";




const BlogTableData = ({ blogs }) => {

  const [deleteBlog]=useDeleteBlogsMutation();
 
  const handleDeleteBlog = async (id) => {
    try {
      const result = await deleteBlog(id);
      console.log('Delete successful', result);
     
    } catch (error) {
      console.error('Failed to delete the blog:', error);
    }
  };


  return (
    <>
      {blogs?.map((blog) => {
        return (
          <tr
            key={blog.id}
            className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
              {blog.id}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
              {blog.title.substring(0, 25)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
              {blog.intro.substring(0, 25)}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-gray-200">
              {blog.body.substring(0, 25)}
            </td>
            <td className="px-6 flex gap-10 justify-end py-4 whitespace-nowrap text-end text-sm font-medium">
              <a
                href={`blog/${blog.id}/edit`}
                className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
                Edit
              </a>
             
                <button
                  onClick={() => handleDeleteBlog(blog.id)}
                  className="inline-flex hover:text-red-300 active:text-red-700 items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600  disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
                  Delete
                </button>
             
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default BlogTableData;

BlogTableData.propTypes = {
  blogs: PropTypes.array,
};
