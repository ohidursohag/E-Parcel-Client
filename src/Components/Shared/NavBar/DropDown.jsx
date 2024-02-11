
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
        className=" p-1  sm:px-2  bg-orange-500  flex  items-center gap-2 rounded-full cursor-pointer hover:shadow-md transition"
      >

        <AiOutlineBars size={25} color="white" />
        {user ? (
          <div className="rounded-full w-[30px] h-[30px] bg-white hidden sm:block">
            {/* Avatar */}
            <img
              className="rounded-full object-cover object-center w-[30px] h-[30px]"
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