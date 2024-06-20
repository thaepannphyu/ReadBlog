
import PropTypes from 'prop-types';

const TextAreaCustom = ({value,handleChange} ) => {
  return (
    <div className=" w-full space-y-3">
  <textarea value={value} onChange={handleChange} className="py-3 px-0 block w-full bg-transparent border-t-transparent 
  border-b-2 border-x-transparent
   border-b-gray-200 text-sm focus:border-blue-500
    focus:border-t-transparent focus:border-x-transparent
     focus:border-b-blue-500 focus:ring-0
      disabled:opacity-50 disabled:pointer-events-none
       dark:border-b-neutral-700 dark:text-neutral-400
        dark:placeholder-neutral-500 dark:focus:ring-neutral-600
         dark:focus:border-b-neutral-600" rows="1" placeholder="This is a textarea placeholder"></textarea>
</div>
  )
}

export default TextAreaCustom
TextAreaCustom.propTypes={
  value:PropTypes.string.isRequired,
  handleChange:PropTypes.func.isRequired
}