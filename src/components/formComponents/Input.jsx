import PropTypes from "prop-types";

const Input = ({
  handleInputChange,
  value,
  name,
  type="text",
  className,
  placeholder,
}) => {
  return (
    <div className=  {`${className} sm:flex`}>
      <input
        onChange={handleInputChange}
        value={value}
        name={name}
        id="af-account-full-name"
        type={type}
        className={`py-2 px-3 pe-11 block w-full bg-gray-100 border-2 border-gray-100  shadow-sm -mt-px -ms-px 
          first:rounded-t-lg last:rounded-b-lg 
          sm:first:rounded-s-lg sm:mt-0
         sm:first:ms-0 sm:first:rounded-se-none 
         sm:last:rounded-es-none sm:last:rounded-e-lg
          text-sm relative focus:z-10 focus:border-green-200
           focus:ring-green-200 disabled:opacity-50 
           disabled:pointer-events-none dark:bg-slate-900
            dark:border-gray-700 dark:text-gray-400
             dark:focus:ring-gray-600  
             `}
        placeholder={placeholder ?? placeholder}
      />
    </div>
  );
};

export default Input;

Input.propTypes = {
  placeholder: PropTypes.string,
  value: PropTypes.string,
  name: PropTypes.string,
  setValue: PropTypes.func,
  className: PropTypes.any,
  handleInputChange: PropTypes.func.isRequired,
};
