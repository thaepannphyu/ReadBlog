
import { useLogoutMutation } from '../../App/Auth/Auth';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedIn } from '../../App/User/ProfileSlice';

const Profile = () => {
  const isLoggedIn=useSelector(state=>state.authSlice.isLoggedIn);
  const [logout]= useLogoutMutation();
  const dispatch=useDispatch();


  const handleLogout = async () => {
    try {
      await logout().unwrap(); // Ensure the logout mutation is called correctly
      dispatch(setLoggedIn(false));
      
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };
console.log(isLoggedIn);

  return (
    <div className=" flex flex-col w-full justify-center items-center bg-white dark:bg-gray-800 shadow-md rounded-lg">
      <div className="flex  flex-col justify-center items-center ">
        <img
          className="w-12 h-12 rounded-full"
          src=""
          alt="User Profile"
        />
       
          <button className="text-center text-sm font-semibold text-gray-900 dark:text-white">
            
          </button>
       
      </div>
      <div className="mt-4 flex justify-between w-full">
        {isLoggedIn==true? (
          <button
            onClick={handleLogout}
            className="w-full py-2 px-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none"
          >
            Logout
          </button>
        ) : (
          <a
            href='/user/login'
            className="w-full py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none"
          >
            Login
          </a>
        )}
      </div>
    </div>
  );
};



export default Profile;
