import PropTypes from "prop-types";

const Button = ({ children }) => {
  return (
    <button className="transition-color w-full rounded-md bg-orange-300 px-4 py-2 outline-none duration-300 hover:bg-orange-400 focus:ring-2 focus:ring-orange-400">
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export default Button;
