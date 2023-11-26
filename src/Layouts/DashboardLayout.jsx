import { Outlet } from "react-router-dom";
import Container from "../Components/Shared/Container";
import SideBar from "../Components/DashBoard/SideBar/SideBar";


const DashboardLayout = () => {
return(
    <Container>
        <div className="grid grid-cols-12 min-h-screen">
            {/* Side Bar */}
            <div className="col-span-3 bg-gray-200 py-10">
                <SideBar/>
            </div>
            {/* DashBoard Contents */}
            <div className="col-span-9 px-5 py-16 bg-[#f6f6f6] ">
                <Outlet />
            </div>
        </div>
    </Container>
)}
export default DashboardLayout;