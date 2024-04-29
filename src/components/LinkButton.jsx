import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const LinkButton = ({ children, to }) => {
  return (
    <Link
      to={to}
      className=" inline-block rounded-xl bg-orange-300 px-4 py-2 text-stone-900 "
    >
      {children}
    </Link>
  );
};

LinkButton.propTypes = {
  children: PropTypes.node,
  to: PropTypes.string.isRequired,
};

export default LinkButton;
