import PropTypes from "prop-types";
import AdminTableData from "./AdminTableData";


// import Pagination from "./Pagination";

const AdminTable = ({users}) => {

    return (
      <div className="  flex flex-col gap-10">
      <div className="-m-1.5 overflow-x-auto">
        <div className="p-1.5 min-w-full inline-block align-middle">
          <div className="overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
              <thead>
                <tr>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">id</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Name</th>
                  <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase">Email</th>

                  <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase">Action</th>
                </tr>
              </thead>
              <tbody>
             {users?.isLoading==false?<AdminTableData users={users.data}/>:<tr>
              <td className=" col-span-5 text-center">Empty Data</td></tr>}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
    
    )
   
  }
  
  export default AdminTable
  AdminTable.propTypes={
    users:PropTypes.object
  }