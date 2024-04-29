import PropTypes from "prop-types";

const InputGroup = ({ type, name, placeholder }) => {
  return (
    <div className="my-4">
      <label
        htmlFor={name}
        className="mb-1 block text-sm text-slate-600 md:text-base"
      >
        {placeholder}
      </label>
      <input
        type={type}
        id={name}
        className="w-full rounded-md border px-8 py-2 text-sm ring-orange-100 focus:border-orange-100 focus:outline-none focus:ring-2 md:text-base"
      />
    </div>
  );
};

InputGroup.propTypes = {
  type: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
};

export default InputGroup;
