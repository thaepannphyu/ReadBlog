
import PropTypes from 'prop-types';
const SubmitBtn = ({btn}) => {
  return (
    <>
      <div className="mt-5 flex justify-center gap-x-2">
        <button
          type="submit"
          className="py-2 px-6 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
          {btn}
        </button>
      </div>
    </>
  );
};

export default SubmitBtn;
SubmitBtn.propTypes={
  btn:PropTypes.string
}