import { Outlet } from "react-router-dom";
import SideBar from "../Components/DashBoard/SideBar/SideBar";

const DashboardLayout = () => {
  return (
    <div>
      <div className="relative min-h-screen md:flex">
        {/* Side Bar */}
        <SideBar />
        <div className="flex-1 md:ml-64">
          <div className="p-5 lg:p-10">
            {/* Outlet for dynamic contents */}
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};
export default DashboardLayout;
