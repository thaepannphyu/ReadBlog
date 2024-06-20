import PropTypes from "prop-types"

const Title = ({title}) => {
  return (
  
    <h1 className=' p-5 text-center text-3xl font-semibold line-clamp-2'>
     {title}
    </h1>

  )
}

export default Title;
Title.propTypes={
  title:PropTypes.string
}