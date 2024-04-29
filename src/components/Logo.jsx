import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to="/">
      <img src="/logo.png" alt="Bookworm logo" className="w-32" />
    </Link>
  );
};

export default Logo;
