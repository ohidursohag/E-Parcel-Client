
import useAuth from "../../../Hooks/useAuth";
import { AiOutlineBars } from "react-icons/ai";
import avatarImg from '../../../assets/image/avatar.webp'
import PropTypes from "prop-types";
const DropDown = ({ sideBarIsOpen, setSideBarIsOpen }) => {
   
  const { user } = useAuth();

  return (
    <>
      <div
        onClick={() => setSideBarIsOpen(!sideBarIsOpen)}
        className={`p-1 ${user?'sm:px-2 bg-orange-300 text-white hover:shadow-[0px_2px_5px_0px_rgba(249,115,22)] hover:bg-orange-500':'sm:p-2 text-orange-300'} flex  items-center gap-2 rounded-full cursor-pointer  transition hover:scale-105 duration-300 `}
      >

        <AiOutlineBars size={30} color="" />
        {user ? (
          <div className="rounded-full w-[30px] h-[30px] bg-white hidden sm:block ">
            {/* Avatar */}
            <img
              className="rounded-full object-cover border border-orange-500 object-center w-[30px] h-[30px]"
              referrerPolicy="no-referrer"
              src={user && user.photoURL ? user.photoURL : avatarImg}
              alt="profile"
              height="30"
              width="30"
            />
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

DropDown.propTypes = {
  sideBarIsOpen: PropTypes.bool,
  setSideBarIsOpen: PropTypes.func,
};
export default DropDown;