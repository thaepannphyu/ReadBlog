import { Outlet } from "react-router-dom";


const AuthFormLayout = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-gray-200 flex flex-col gap-10 p-8 rounded-lg shadow-lg w-full max-w-md">
        <Outlet/>
      </div>
    </div>
  );
}

export default AuthFormLayout;
