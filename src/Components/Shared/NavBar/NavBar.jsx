import { IoNotifications } from "react-icons/io5";
import Container from "../Container";
import Logo from "../Logo";
import DropDown from "./DropDown";
import NavLinks from "./NavLinks";
import navBg from "../../../assets/image/bg-footer.jpg";
import blurePlaceHolder from "../../../assets/PlaceHolder/BlurPlaceHolder.jpg";
import PropTypes from "prop-types";
import useClickOutSide from "../../../Hooks/useClickOutSide";
import useLazyLoading from "../../../Hooks/useLazyLoading";

const NavBar = ({ sideBarIsOpen, setSideBarIsOpen }) => {
  const refWraper = useClickOutSide(setSideBarIsOpen);
  const loadImage = useLazyLoading(navBg);
  return (
    <div
      style={{ backgroundImage: `url(${loadImage || blurePlaceHolder})` }}
      className="bg-contain bg-center bg-blend-overlay left-0 top-0 w-full fixed z-[999]  bg-black bg-opacity-[80%] shadow-[0px_2px_5px_0px_rgba(249,115,22)] ">
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

            <div ref={refWraper} className="">
              <DropDown
                sideBarIsOpen={sideBarIsOpen}
                setSideBarIsOpen={setSideBarIsOpen}
              />
            </div>
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
