import { Link, useLocation } from "react-router-dom";
import useUserRole from "../../../Hooks/useUserRole";
import useAuth from "../../../Hooks/useAuth";
// import { IoNotifications } from "react-icons/io5";

const NavLinks = () => {
  const { role } = useUserRole();
  const { user } = useAuth();
  const { pathname } = useLocation();
//   console.log(pathname);
  return (
    <>
      <Link
        to="/"
        className={`group  font-medium text-lg duration-300 hover:text-orange-500 ${
          pathname === "/" ? "text-orange-500 " : "text-white"
        }`}
      >
        <span>Home</span>
        <span
          className={`block bg-orange-500 w-0 h-[2px] duration-300 group-hover:w-full ${
            pathname === "/" ? "w-full " : ""
          }`}
        ></span>
      </Link>
      <Link
        to="/about-us"
        className={`group  font-medium text-lg duration-300 hover:text-orange-500 ${
          pathname === "/about-us" ? "text-orange-500 " : "text-white"
        }`}
      >
        <span>About Us</span>
        <span
          className={`block bg-orange-500 w-0 h-[2px] duration-300 group-hover:w-full ${
            pathname === "/about-us" ? "w-full " : ""
          }`}
        ></span>
      </Link>
      <Link
        to="/pricing"
        className={`group  font-medium text-lg duration-300 hover:text-orange-500 ${
          pathname === "/pricing" ? "text-orange-500 " : "text-white"
        }`}
      >
        <span>Pricing</span>
        <span
          className={`block bg-orange-500 w-0 h-[2px] duration-300 group-hover:w-full ${
            pathname === "/pricing" ? "w-full " : ""
          }`}
        ></span>
      </Link>
      <Link
        to="/contact-us"
        className={`group  font-medium text-lg duration-300 hover:text-orange-500 ${
          pathname === "/contact-us" ? "text-orange-500 " : "text-white"
        }`}
      >
        <span>Contact Us</span>
        <span
          className={`block bg-orange-500 w-0 h-[2px] duration-300 group-hover:w-full ${
            pathname === "/contact-us" ? "w-full " : ""
          }`}
        ></span>
      </Link>
      {user?.email && (
        <Link
          to={`/dashboard/${role}/statistics`}
          className={`group  font-medium text-lg duration-300 hover:text-orange-500 ${
            pathname === `/dashboard/${role}/statistics` ? "text-orange-500 " : "text-white"
          }`}
        >
          <span>Dashboard</span>
          <span
            className={`block bg-orange-500 w-0 h-[2px] duration-300 group-hover:w-full ${
              pathname === `/dashboard/${role}/statistics` ? "w-full " : ""
            }`}
          ></span>
        </Link>
      )}

      {/* <NavLink to='/login' className={({ isActive }) => isActive ? 'text-orange-500 underline font-semibold text-lg ' : 'text-white font-semibold text-lg'}>Login</NavLink> */}
      {/* <button className='text-white  underline font-semibold text-lg '><IoNotifications /></button> */}
    </>
  );
};
export default NavLinks;
