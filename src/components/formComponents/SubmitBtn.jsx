
import PropTypes from 'prop-types';
const SubmitBtn = ({btn}) => {
  return (
    <>
      
        <button
          type="submit"
          className="bg-blue-500 text-white p-3 rounded-lg font-semibold hover:bg-blue-600">
          {btn}
        </button>
    
    </>
  );
};

export default SubmitBtn;
SubmitBtn.propTypes={
  btn:PropTypes.string
}