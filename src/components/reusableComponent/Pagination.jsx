
import PropTypes from "prop-types";

const Pagination = (props) => {

  const shouldDisplayPage = (page) => {
    return Math.abs(page - props?.currentPage) <= 2;
  };

  const linkArray=props?.links
  ?.slice(1, props?.links.length - 1)
  .filter((link) => shouldDisplayPage(link.label));


  const handlePreviousPage = () => {
    if (props?.currentPage > 1) {
      props?.setCurrentPage(props?.currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (props?.lastPage && props?.currentPage < props?.lastPage) {
      props?.setCurrentPage(props?.currentPage + 1);
    }
  };


  return (
    <section className="flex flex-col gap-10">
      <nav className="flex mx-auto items-center -space-x-px">
        <button
          type="button"
          onClick={handlePreviousPage}
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          disabled={props?.currentPage <= 1}
        >
          <svg
            className="flex-shrink-0 size-3.5"
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
          <span className="hidden sm:block">Previous</span>
        </button>

        {
          linkArray?.map((link, index) => (
            <button
              key={index}
              type="button"
              onClick={() => props?.setCurrentPage(link.label)}
              className={`min-h-[38px] min-w-[38px] flex justify-center items-center py-2 px-3 text-sm rounded-lg focus:outline-none
                ${
                  link.label == props?.currentPage
                    ? "bg-gray-100 text-gray-800 border border-gray-800 dark:bg-gray-600 dark:border-gray-700 dark:text-white dark:focus:bg-gray-500"
                    : "border border-transparent text-gray-800 hover:bg-gray-100 dark:border-transparent dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
                }`}
              aria-current={link.label === props?.currentPage ? "page" : undefined}
            >
              {link.label}
            </button>
          ))}

        <button
          type="button"
          onClick={handleNextPage}
          className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm first:rounded-s-lg last:rounded-e-lg border border-gray-200 text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:border-gray-700 dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          disabled={props?.currentPage >= props?.lastPage}
        >
          <span className="hidden sm:block">Next</span>
          <svg
            className="flex-shrink-0 size-3.5"
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
        </button>
      </nav>
    </section>
  );
};

Pagination.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
    })
  ).isRequired,
  currentPage: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
    .isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  lastPage: PropTypes.number.isRequired,
};

export default Pagination;
