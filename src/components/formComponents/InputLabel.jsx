import PropTypes from 'prop-types';
import Input from './Input';
import Label from './Label';




const InputLabel = ({name,labelText,placeholder,type,value="",setValue,className}) => {

  const handleInputChange = (event) => {
    setValue(event.target.value);
  };


  return (

    <>
      {/*Label */}
      <div className="sm:col-span-3 block text-gray-700 font-bold mb-2">
        <Label label={labelText}/>
      </div>

      {/*Input */}
      <div className="md:col-span-12">
        <Input name={name} handleInputChange={handleInputChange} value={value} type={type} className={className} placeholder={placeholder}/>
      </div>
    </>
  );
};

export default InputLabel;

InputLabel.propTypes = {
  labelText: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  type: PropTypes.string.isRequired,
  value:PropTypes.string,
  name:PropTypes.string,
  setValue:PropTypes.func,
  className:PropTypes.any
};
