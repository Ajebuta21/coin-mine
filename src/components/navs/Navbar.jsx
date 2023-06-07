import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const list = [
  { id: 1, title: "home", to: "/" },
  { id: 2, title: "about us", to: "/about" },
  { id: 3, title: "atm", to: "/atm" },
  { id: 4, title: "swap", to: "/swap" },
  { id: 5, title: "tesla", to: "/tesla" },
  { id: 6, title: "dashboard", to: "/dashboard" },
];
const Navbar = () => {
  const location = useLocation();
  const [open, setOpen] = useState(false);

  return (
    <nav
      className={`w-full h-[8vh] fixed border-b border-white bg-white transition ease-in-out text-green-800 z-50`}
    >
      <div className="w-full px-4 h-full flex justify-between items-center relative">
        {/* hamburger  */}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 shadow-sm rounded-md border hidden max-lg:block"
        >
          {open ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          )}
        </button>
        {/* hamburger end */}
        {/* icon  */}
        <Link to="/" className="flex gap-1 items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-5 h-5"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
          <span className="text-xl">CoinMine</span>
        </Link>
        {/* icon  end*/}
        {/* desktop list  */}
        <ul className="flex gap-4 h-full items-start justify-center">
          {list.map((item) => {
            return (
              <Link
                key={item.id}
                to={item.to}
                className={`w-24 h-full flex items-center justify-center capitalize border-b-2 transition ease-in-out duration-300 tracking-tight max-lg:hidden ${
                  location.pathname === item.to
                    ? "border-green-800 scale-x-105"
                    : "border-white"
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </ul>
        {/* desktop list end */}
        {/* auth  */}
        <ul className="flex items-start">
          <Link
            to="/login"
            className="flex gap-1 items-center px-2 border-r left h-4/5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 max-md:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              />
            </svg>
            Login
          </Link>
          <Link
            to="/signup"
            className="flex gap-1 items-center px-2 left h-4/5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-4 h-4 max-md:hidden"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19 7.5v3m0 0v3m0-3h3m-3 0h-3m-2.25-4.125a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zM4 19.235v-.11a6.375 6.375 0 0112.75 0v.109A12.318 12.318 0 0110.374 21c-2.331 0-4.512-.645-6.374-1.766z"
              />
            </svg>
            Signup
          </Link>
        </ul>
        {/* auth end */}
        {/* mobile nav  */}
        <ul
          className={`hidden max-lg:flex absolute w-full bg-white/80 backdrop-blur-md p-4 flex-col gap-2 left-0 transition ease-in-out duration-500 ${
            open
              ? "opacity-100 translate-y-0 top-[8vh]"
              : "opacity-0 -translate-y-full top-0"
          }`}
        >
          {list.map((item) => {
            return (
              <Link
                onClick={() => setOpen(!open)}
                key={item.id}
                to={item.to}
                className={`w-full p-2 px-4 rounded-md capitalize ${
                  location.pathname === item.to ? "bg-green-800 text-white" : ""
                }`}
              >
                {item.title}
              </Link>
            );
          })}
        </ul>
        {/* mobile nav end */}
      </div>
    </nav>
  );
};

export default Navbar;
