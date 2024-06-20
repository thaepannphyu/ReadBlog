import PropTypes from "prop-types";
import { useUpdateUserMutation } from "../../../App/User/UserApi";



const AdminTableData = ({ users }) => {
  
  const [makeAdmin] = useUpdateUserMutation();


  const handleMakeAdmin = async (user) => {

    try {

      const id = user.id;
      const submitData={
           is_admin: !user.is_admin
      }
     await makeAdmin({id, ...submitData} );
      
    } catch (error) {
      console.error("Failed to delete the blog:", error);
    }
  };

  return (
    <>
      {users?.map((user) => {
        return (
          <tr
            key={user.id}
            className="odd:bg-white even:bg-gray-100 hover:bg-gray-100 dark:odd:bg-gray-800 dark:even:bg-gray-700 dark:hover:bg-gray-700">
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
              {user.id}
            </td>

            

            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
              {user.name}
            </td>
            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-gray-200">
              {user.email}
            </td>

            <td className="px-6 flex gap-10 justify-end py-4 whitespace-nowrap text-end text-sm font-medium">
              <button
                onClick={() => handleMakeAdmin(user)}
                className={`inline-flex hover:text-red-300 active:text-red-700 items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600  disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400`}
                >
                {user.is_admin==true?"Remove admin":"Make admin"}
              </button>
              
            </td>
          </tr>
        );
      })}
    </>
  );
};

export default AdminTableData;

AdminTableData.propTypes = {
  users: PropTypes.array,
};
