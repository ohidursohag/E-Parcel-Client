import PropTypes from "prop-types";
import useAuth from "../../../Hooks/useAuth";
import useUserRole from "../../../Hooks/useUserRole";
import MenuItem from "../../DashBoard/SideBar/MenuItem";
import { FaHome } from "react-icons/fa";
import { BiSolidContact } from "react-icons/bi";
import {
  MdDashboard,
  MdOutlineAppRegistration,
  MdPriceChange,
} from "react-icons/md";
import { TbLogout, TbLogin } from "react-icons/tb";
import { BsInfoSquareFill } from "react-icons/bs";
import bgImg from "../../../assets/image/bg-footer.jpg";
import { IoSettingsSharp } from "react-icons/io5";
// import useClickOutSide from "../../../Hooks/useClickOutSide";
// eslint-disable-next-line no-unused-vars
const SideNavBar = ({ sideBarIsOpen, setSideBarIsOpen }) => {
  const { user, logOut } = useAuth();
  const { role } = useUserRole();
//   const refWraper = useClickOutSide(setSideBarIsOpen);

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`fixed top-[52px] lg:top-[71px] bg-contain bg-center left-0 bg-blend-overlay bg-black bg-opacity-[80%] shadow-[2px_0px_3px_0px_rgba(249,115,22)]  duration-300 h-[calc(100vh-50px)] lg:h-[calc(100vh-71px)] z-40 
      ${sideBarIsOpen ? "w-[220px]" : "w-0"}`}
    >
      <div
        // ref={refWraper}
        className=" h-full flex flex-col justify-between overflow-hidden text-sm"
      >
        <div>
          {user && (
            <div className="my-5">
              <figure className="rounded-full w-16 mx-auto overflow-hidden ring ring-orange-500">
                <img src={user.photoURL} alt="" />
              </figure>
              <p className="text-lg text-center px-2 font-medium text-orange-400">
                {user?.displayName.slice(0, 16)}
              </p>
              <p className="text-white text-center mb-5">{user?.email}</p>
              <div className=""></div>
            </div>
          )}
          <hr className="border-orange-500" />
          <div
            className={`${
              user ? "" : "mt-10"
            } divide-y-[1px] divide-orange-500`}
          >
            <MenuItem icon={FaHome} label="Home" address="/" />
            <MenuItem
              icon={BsInfoSquareFill}
              label="About Us"
              address="/about-us"
            />

            <MenuItem icon={MdPriceChange} label="Pricing" address="/pricing" />
            <MenuItem
              icon={BiSolidContact}
              label="Contact Us"
              address="/contact-us"
            />
          </div>

          <hr className="border-orange-500" />
        </div>
        <div className="mb-10">
          {user ? (
            <>
              <hr className="border-orange-500" />
              <MenuItem
                icon={MdDashboard}
                label="Dashboard"
                address={`/dashboard/${role}/statistics`}
              />
              <hr className="border-orange-500" />
              <MenuItem
                icon={IoSettingsSharp}
                label="Profile"
                address="/dashboard/profile"
              />
              <hr className="border-orange-500" />
              <div
                onClick={logOut}
                className=" flex items-center px-10 py-2 cursor-pointer text-white  transition-colors duration-300 transform  hover:bg-gray-500"
              >
                <TbLogout size={25} />
                <span className="mx-4 font-medium">Logout</span>
              </div>
              <hr className="border-orange-500" />
            </>
          ) : (
            <>
              <hr className="border-orange-500" />
              <MenuItem icon={TbLogin} label="Login" address="/login" />
              <hr className="border-orange-500" />
              <MenuItem
                icon={MdOutlineAppRegistration}
                label="Register"
                address="/register"
              />
              <hr className="border-orange-500" />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

SideNavBar.propTypes = {
  sideBarIsOpen: PropTypes.bool,
  setSideBarIsOpen: PropTypes.func,
};

export default SideNavBar;
