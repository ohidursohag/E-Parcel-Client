import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";
import siteBg from "../assets/image/bg.png";
import Footer from "../Components/Shared/Footer/Footer";
import SideNavBar from "../Components/Shared/SideNavBar/SideNavBar";
import { useState } from "react";

const MainLayout = () => {
    const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  
  const navigation = useNavigation();
  return (
    <div
      style={{ backgroundImage: `url(${siteBg})` }}
      className="font-ubuntu bg-[#FFF3DF]  bg-no-repeat"
    >
      <NavBar
        sideBarIsOpen={sideBarIsOpen}
        setSideBarIsOpen={setSideBarIsOpen}
      />
      <div className="min-h-[calc(100vh-107px)]">
        {navigation.state === "loading" ? <LoadingAnimation /> : <Outlet />}
      </div>
      <Footer />
      <div>
        <SideNavBar
          sideBarIsOpen={sideBarIsOpen}
          setSideBarIsOpen={setSideBarIsOpen}
        />
      </div>
    </div>
  );
};
export default MainLayout;
