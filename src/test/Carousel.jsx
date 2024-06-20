

const Carousel = () => {
  return (
    <div className="  w-20">
    {/* Slider */}
    <div
      data-hs-carousel='{
      "loadingClasses": "opacity-0"
    }'
      className="relative"
    >
      <div className="hs-carousel relative overflow-hidden w-full min-h-12 bg-white rounded-lg">
        <div className="hs-carousel-body absolute top-0 bottom-0 start-0 flex flex-nowrap transition-transform duration-700 opacity-0">
          <div className="hs-carousel-slide ">
            <div className="flex   justify-between h-full  p-6 dark:bg-neutral-900">
              <span className="self-center  transition duration-700 dark:text-white inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-500 text-white">Badge</span>
             
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center h-full p-6 dark:bg-neutral-800">
              <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                Second slide
              </span>
            </div>
          </div>
          <div className="hs-carousel-slide">
            <div className="flex justify-center h-full  p-6 dark:bg-neutral-700">
              <span className="self-center text-4xl text-gray-800 transition duration-700 dark:text-white">
                Third slide
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        className="hs-carousel-prev hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 start-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-s-lg dark:text-white dark:hover:bg-white/10"
      >
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="flex-shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </span>
        <span className="sr-only">Previous</span>
      </button>
      <button
        type="button"
        className="hs-carousel-next hs-carousel:disabled:opacity-50 disabled:pointer-events-none absolute inset-y-0 end-0 inline-flex justify-center items-center w-[46px] h-full text-gray-800 hover:bg-gray-800/10 rounded-e-lg dark:text-white dark:hover:bg-white/10"
      >
        <span className="sr-only">Next</span>
        <span className="text-2xl" aria-hidden="true">
          <svg
            className="flex-shrink-0 size-5"
            xmlns="http://www.w3.org/2000/svg"
            width={24}
            height={24}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </span>
      </button>
      
    </div>
    {/* End Slider */}
  </div>
  
  )
}

export default Carousel
