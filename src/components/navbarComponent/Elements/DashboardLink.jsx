import PropTypes from "prop-types"

const DashboardLink = ({isAdmin}) => {
  return (
    <>
    {isAdmin? (
        <a href="./dashboard" className="mr-5 hover:text-gray-900">
          Dashboard
        </a>
      ) : (
        ""
      )}</>
  )
}

export default DashboardLink

DashboardLink.propTypes={
    isAdmin:PropTypes.bool
}
