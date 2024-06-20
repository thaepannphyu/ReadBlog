
import PropTypes from 'prop-types';
const Radio = ({ labelText, radioOption,setValue}) => {
  const handleInputChange = (event) => {
    setValue(event.target.value);
  };
  return (
    <>
      <div className="sm:col-span-3">
        <label
          htmlFor="af-account-gender-checkbox"
          className="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
          {labelText}
        </label>
      </div>

      <div className="sm:col-span-9">
        <div className="sm:flex">
          {radioOption.map((option, index) => (
            <label
              key={index}
              htmlFor={`radioOption-${index}`}
              className="flex py-2 px-3 w-full border border-gray-200 shadow-sm -mt-px -ms-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-s-lg sm:mt-0 sm:first:ms-0 sm:first:rounded-se-none sm:last:rounded-es-none sm:last:rounded-e-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600">
              <input
                type="radio"
                value={option}
                onClick={handleInputChange}
                name="af-account-gender-checkbox"
                className="shrink-0 mt-0.5 border-gray-300 rounded-full text-blue-600 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:border-neutral-500 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                id={`radioOption-${index}`}
                defaultChecked=""
              />
              <span className="text-sm text-gray-500 ms-3 dark:text-gray-400">
                {option}
              </span>
            </label>
          ))}
        </div>
      </div>
    </>
  );
};

export default Radio;

Radio.propTypes = {
  labelText: PropTypes.string.isRequired,
  radioOption:PropTypes.array.isRequired,
  setValue:PropTypes.func.isRequired
};
