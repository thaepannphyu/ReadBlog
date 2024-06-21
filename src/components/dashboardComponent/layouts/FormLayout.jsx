import PropTypes from "prop-types"
import {Outlet} from "react-router-dom"
import Title from "../../reusableComponent/Title"

const FormLayout = ({title}) => {

  return (
    <>
        <Title title={title} />
        <div className="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
        <div className="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
              <Outlet/>
        </div>
        </div>
    </>
  )
}

export default FormLayout
FormLayout.propTypes={
  title:PropTypes.string.isRequired
}