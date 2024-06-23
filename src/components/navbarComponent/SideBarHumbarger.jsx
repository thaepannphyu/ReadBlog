
import PropTypes from "prop-types"


const SideBarHumbarger = () => {
  

  return (
       
    <div className="flex lg:hidden  justify-end p-2">
    <button
      type="button"
      className="p-2 inline-flex justify-center items-center gap-x-2 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-gray-700 dark:text-white dark:hover:bg-white/10"
      data-hs-overlay={`#sidebar-mini`}
      aria-controls="sidebar-mini"
      aria-label="Toggle navigation">
      <span className="sr-only">Toggle Navigation</span>
      <svg
        className="flex-shrink-0 size-4"
        width="16"
        height="16"
        fill="currentColor"
        viewBox="0 0 16 16">
        <path
          fillRule="evenodd"
          d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
        />
      </svg>
    </button>
    
  </div>
  )
}

export default SideBarHumbarger
SideBarHumbarger.propTypes={
  id:PropTypes.number
}