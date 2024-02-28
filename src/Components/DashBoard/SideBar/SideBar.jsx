import useAuth from "../../../Hooks/useAuth";

import Logo from "../../Shared/Logo";
import AdminMenu from "../Menu/AdminMenu";
import DeliveryMenMenu from "../Menu/DeliveryMenMenu";
import UserMenu from "../Menu/UserMenu";
import { FcSettings } from "react-icons/fc";
import { GrLogout } from "react-icons/gr";
import { FaHome } from "react-icons/fa";
import { useState } from "react";
import { AiOutlineBars } from "react-icons/ai";
import DashboardMenuItem from "./DashboardMenuItem";
import { BsGraphUp } from "react-icons/bs";
import bgimg from "../../../assets/image/bg-footer.jpg";
import useClickOutSide from "../../../Hooks/useClickOutSide";
import { IoNotifications } from "react-icons/io5";
import useGetCurrentUser from "../../../Hooks/useGetCurrentUser";
const SideBar = () => {
  const { logOut } = useAuth();
  const { role } = useGetCurrentUser();
  const [isShow, setIsShow] = useState(false);
  const refWraper = useClickOutSide(setIsShow);

  return (
    <>
      {/* Small Screen Navbar */}
      <div
        ref={refWraper}
        style={{ backgroundImage: `url(${bgimg})` }}
        className="z-40 bg-contain fixed  w-full bg-black bg-opacity-80 bg-center py-2 bg-blend-overlay  flex justify-between items-center px-5 lg:hidden">
        <div>
          <div className="block cursor-pointer  font-bold">
            <Logo />
          </div>
        </div>

        <div className="flex gap-3 items-center">
          <button className="text-orange-300  underline font-semibold text-lg ">
            <IoNotifications size={30} />
          </button>
          <button
            onClick={() => setIsShow(!isShow)}
            className=" p-1 text-orange-500 bg-white focus:text-white focus:bg-orange-500 focus:outline-none rounded-full shadow-[0px_2px_5px_2px_rgba(249,115,22)]">
            <AiOutlineBars size={25} />
          </button>
        </div>
      </div>
      {/* Side Bar */}
      <div
        className={`z-50 absolute md:fixed flex flex-col justify-between h-screen overflow-x-hidden w-[260px] lg:w-[300px] bg-gray-100 space-y-6 px-2 py-4 top-0 left-0 transform ${
          !isShow && "-translate-x-full"
        }  lg:translate-x-0  transition duration-300 ease-in-out`}>
        <div
          style={{ backgroundImage: `url(${bgimg})` }}
          className="bg-contain bg-center bg-blend-overlay flex  px-4 py-1 shadow-[2px_3px_5px_0px_rgba(249,115,22)] rounded-lg justify-center items-center bg-black bg-opacity-80 mx-auto">
          <Logo />
        </div>
        <div className="mt-5 flex flex-col justify-between h-full uppercase">
          <div>
            <DashboardMenuItem
              icon={BsGraphUp}
              label="Statistics"
              address={`/dashboard/${role}/statistics`}
            />
            <nav>
              {/* Role-wise Menu Items */}
              {role === "user" && <UserMenu />}
              {role === "deliveryMan" && <DeliveryMenMenu />}
              {role === "admin" && <AdminMenu />}
            </nav>
          </div>
          <div>
            <hr className="border-orange-300 border-1  mx-auto my-5" />{" "}
            <DashboardMenuItem icon={FaHome} label="Home" address="/" />
            <DashboardMenuItem
              icon={FcSettings}
              label="Profile"
              address="/dashboard/profile"
            />
            <button
              onClick={logOut}
              className="flex w-full items-center px-3 md:px-6 py-2 my-5  text-gray-600 hover:bg-orange-200   hover:text-gray-700 transition-colors duration-300 transform uppercase">
              <GrLogout className="w-5 h-5" />
              <span className="mx-4 font-medium">Logout</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default SideBar;
