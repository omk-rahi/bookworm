import { useState } from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import LinkButton from "./LinkButton";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className=" sticky top-0 z-10 bg-white shadow-sm shadow-slate-100">
      <nav className="container mx-auto flex flex-wrap items-center justify-between px-6 py-4 md:px-0">
        <Logo />

        <div className="flex items-center justify-center gap-4 md:hidden">
          <LinkButton to="/login">Login</LinkButton>
          <button onClick={() => setIsOpen(!isOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          <li>
            <NavLink to="/" className="inline-block py-2">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/categories" className="inline-block py-2">
              Categories
            </NavLink>
          </li>
          <li>
            <LinkButton to="/login">Login</LinkButton>
          </li>
        </ul>

        {isOpen && (
          <ul className=" mt-4 w-full bg-slate-50 md:hidden">
            <li>
              <NavLink to="/" className="block px-4 py-2">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/categories" className="block px-4 py-2">
                Categories
              </NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
