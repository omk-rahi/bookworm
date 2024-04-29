import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const DefaultLink = ({ to, children, className }) => {
  return (
    <Link
      to={to}
      className={`border-b-2  border-transparent text-orange-300 transition-colors duration-200 hover:border-orange-300 ${className}`}
    >
      {children}
    </Link>
  );
};

DefaultLink.propTypes = {
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
};

export default DefaultLink;
