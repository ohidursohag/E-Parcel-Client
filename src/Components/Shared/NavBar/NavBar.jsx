import { IoNotifications } from "react-icons/io5";
import Container from "../Container";
import Logo from "../Logo";
import DropDown from "./DropDown";
import NavLinks from "./NavLinks";
import navBg from "../../../assets/image/bg-footer.jpg";
import PropTypes from "prop-types";
import useClickOutSide from "../../../Hooks/useClickOutSide";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { TbLogin2, TbLogout } from "react-icons/tb";
const NavBar = ({ sideBarIsOpen, setSideBarIsOpen }) => {
  const refWraper = useClickOutSide(setSideBarIsOpen);
  const { user, logOut } = useAuth();
  return (
    <div
      style={{ backgroundImage: `url(${navBg})` }}
      className="bg-contain bg-center bg-blend-overlay w-full fixed z-50  bg-black bg-opacity-[80%] shadow-[0px_2px_5px_0px_rgba(249,115,22)] ">
      <Container>
        <div className="flex justify-between items-center relative py-2 ">
          <Logo />
          <div className="hidden items-center gap-5 lg:flex">
            <NavLinks />
          </div>
          <div className="flex items-center gap-3">
            <button className="text-orange-300 font-semibold text-lg hover:scale-110 duration-300 hover:text-orange-500">
              <IoNotifications size={30} />
            </button>
            {!user ? (
              <Link
                to={"/login"}
                className="text-orange-300 font-semibold hover:scale-110 duration-300 hover:text-orange-500">
                <TbLogin2 size={30} />
              </Link>
            ) : (
              ""
            )}
            <div ref={refWraper} className="">
              <DropDown
                sideBarIsOpen={sideBarIsOpen}
                setSideBarIsOpen={setSideBarIsOpen}
              />
            </div>

            {user && (
              <button
                onClick={logOut}
                className="text-orange-300 font-semibold hover:scale-110 duration-300 hover:text-orange-500">
                <TbLogout size={30} />
              </button>
            )}
          </div>
        </div>
      </Container>
    </div>
  );
};

NavBar.propTypes = {
  sideBarIsOpen: PropTypes.bool,
  setSideBarIsOpen: PropTypes.func,
};
export default NavBar;
