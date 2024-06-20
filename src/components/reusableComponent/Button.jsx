import PropTypes from "prop-types"

const Button = ({btn}) => {
  return (
    <div className=" bg-gray-200 text-black text-xl">
      {btn}
    </div>
  )
}

export default Button

Button.propTypes={
    btn:PropTypes.string.isRequired
}