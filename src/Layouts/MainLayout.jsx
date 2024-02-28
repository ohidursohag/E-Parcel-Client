import { Outlet, useNavigation } from "react-router-dom";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";
import siteBg from "../assets/image/bg.png";
import { Suspense, lazy, useState } from "react";

const SideNavBar = lazy(() =>
  import("../Components/Shared/SideNavBar/SideNavBar")
);
import NavBar from "../Components/Shared/NavBar/NavBar";
import useLazyLoading from "../Hooks/useLazyLoading";
import GotoTop from "../Components/Shared/GotoTop/GotoTop";
const Footer = lazy(() => import("../Components/Shared/Footer/Footer"));
const MainLayout = () => {
  const [sideBarIsOpen, setSideBarIsOpen] = useState(false);
  const bgLoaded = useLazyLoading(siteBg);
  const navigation = useNavigation();
  return (
    <div
      style={{ backgroundImage: `url(${bgLoaded || ""})` }}
      className="font-ubuntu bg-[#FFF3DF]  bg-no-repeat max-w-[2000px] mx-auto relative">
      <NavBar
        sideBarIsOpen={sideBarIsOpen}
        setSideBarIsOpen={setSideBarIsOpen}
      />
      <div className="min-h-[calc(100vh-107px)]">
        {navigation.state === "loading" ? <LoadingAnimation /> : <Outlet />}
      </div>
          <GotoTop/>
      <Suspense>
        <Footer />
      </Suspense>
      <div>
        <Suspense>
          <SideNavBar
            sideBarIsOpen={sideBarIsOpen}
            setSideBarIsOpen={setSideBarIsOpen}
          />
        </Suspense>
      </div>
    </div>
  );
};
export default MainLayout;
