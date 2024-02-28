import useAuth from "../../../Hooks/useAuth";
import { AiOutlineBars } from "react-icons/ai";
import avatarImg from "../../../assets/image/avatar.webp";
import PropTypes from "prop-types";
import { useState } from "react";
import DropDownMenu from "./DropDownMenu";
import useGetCurrentUser from "../../../Hooks/useGetCurrentUser";
import useClickOutSide from "../../../Hooks/useClickOutSide";

const DropDown = ({ sideBarIsOpen, setSideBarIsOpen }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const { user } = useAuth();
  const refWraper = useClickOutSide(setOpenDropdown)
  const { currentUser } = useGetCurrentUser();
  return (
    <>
      <div ref={refWraper}
        onClick={() => {
          setSideBarIsOpen(!sideBarIsOpen);
          setOpenDropdown(!openDropdown);
        }}
        className={`p-1 ${
          user
            ? "sm:px-2 bg-orange-300 text-white hover:shadow-[0px_2px_5px_0px_rgba(249,115,22)] hover:bg-orange-500"
            : "sm:p-2 text-orange-300 "
        } flex  items-center gap-2 rounded-full cursor-pointer  hover:scale-105 duration-300 relative`}>
        <AiOutlineBars size={30} color="" />
        {user ? (
          <div className="rounded-full w-[30px] h-[30px] bg-white hidden sm:block ">
            {/* Avatar */}
            <img
              className="rounded-full object-cover border border-orange-500 object-center w-[30px] h-[30px]"
              referrerPolicy="no-referrer"
              src={user && currentUser?.image ? currentUser?.image : avatarImg}
              alt="profile"
              height="30"
              width="30"
            />
          </div>
        ) : (
          ""
        )}
      </div>
      <div >
      <DropDownMenu
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      </div>
    </>
  );
};

DropDown.propTypes = {
  sideBarIsOpen: PropTypes.bool,
  setSideBarIsOpen: PropTypes.func,
};
export default DropDown;
