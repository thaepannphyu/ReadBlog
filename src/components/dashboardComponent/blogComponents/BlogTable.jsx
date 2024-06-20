import PropTypes from "prop-types";
import BlogTableData from "./BlogTableData";


// import Pagination from "./Pagination";

const BlogTable = ({blogs}) => {
 


    return (
      <div className="flex flex-col gap-10">

      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Id</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Title</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Intro</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Body</th>
                  <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody>
             {blogs?.isLoading==false?<BlogTableData blogs={blogs.data}/>:<tr>
              <td className=" col-span-5 text-center">Empty Data</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    )
   
  }
  
  export default BlogTable
  BlogTable.propTypes={
    blogs:PropTypes.object
  }