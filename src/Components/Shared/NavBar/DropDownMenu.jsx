import useAuth from "../../../Hooks/useAuth";

import bgImg from "../../../assets/image/bg-footer.jpg";
import PropTypes from "prop-types";
import MenuItem from "../Utilities/MenuItem";
import { MdDashboard, MdOutlineAppRegistration } from "react-icons/md";
import { IoSettingsSharp } from "react-icons/io5";
import { TbLogin, TbLogout } from "react-icons/tb";
import useGetCurrentUser from "../../../Hooks/useGetCurrentUser";

const DropDownMenu = ({ openDropdown }) => {
  const { user, logOut } = useAuth();
  const { currentUser, role } = useGetCurrentUser();

  return (
    <div
      style={{ backgroundImage: `url(${bgImg})` }}
      className={`absolute top-[52px] lg:top-[71px] -z-50 bg-contain bg-center right-0 bg-blend-overlay bg-black bg-opacity-[80%] shadow-[0px_0px_5px_1px_rgba(249,115,22)] rounded-b-lg  duration-500 hidden lg:block ${
        user ? "" : ""
      } w-[250px]
    ${
      openDropdown
        ? "scale-y-100 translate-y-0 opacity-1000"
        : "opacity-0 scale-y-0 -translate-y-[50%]"
    }`}>
      <div>
        {user && (
          <div className="my-5">
            <figure className="rounded-full w-10 h-10 mx-auto overflow-hidden ring bg-gray-100 ring-orange-500">
              <img
                loading="lazy"
                className="object-cover w-10 h-10 object-center"
                src={currentUser?.image}
                alt="profile image"
              />
            </figure>
            <p className="text-lg text-center px-2 font-medium text-orange-400">
              {user?.displayName.slice(0, 16)}
            </p>
            <p className="text-white text-center mb-5">{user?.email}</p>
            <div className=""></div>
          </div>
        )}
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
              className=" flex items-center px-10 py-2 cursor-pointer text-white  transition-colors duration-300 transform  hover:bg-gray-500">
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
  );
};

DropDownMenu.propTypes = {
  openDropdown: PropTypes.bool,
  setOpenDropdown: PropTypes.func,
};
export default DropDownMenu;
