
import PropTypes from "prop-types"

const LoginLogoutLink = ({isLoggedIn,handleLogout,handleLogin}) => {
  return (
    <div className="mr-5 hover:text-gray-900">
    {isLoggedIn == true ? (
      <button
        onClick={handleLogout}
        className="w-full py-2 px-4 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-700 focus:outline-none">
        Logout
      </button>
    ) : (
      <a
        onClick={handleLogin}
        className="w-full py-2 px-4 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-700 focus:outline-none">
        Login
      </a>
    )}
  </div>
  )
}

export default LoginLogoutLink

LoginLogoutLink.propTypes={
    isLoggedIn:PropTypes.bool,
    handleLogout:PropTypes.func  ,
    handleLogin:PropTypes.func
}