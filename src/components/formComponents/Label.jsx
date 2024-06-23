
import PropTypes from 'prop-types';
const Label = ({label}) => {
  return (
    <label
            htmlFor="af-account-full-name"
            className="block text-gray-700 font-bold mb-2  mt-2.5 dark:text-gray-200">
           {label}
    </label>
  )
}

export default Label

Label.propTypes = {
    label: PropTypes.string.isRequired
  };