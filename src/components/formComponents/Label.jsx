
import PropTypes from 'prop-types';
const Label = ({label}) => {
  return (
    <label
            htmlFor="af-account-full-name"
            className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
           {label}
    </label>
  )
}

export default Label

Label.propTypes = {
    label: PropTypes.string.isRequired
  };