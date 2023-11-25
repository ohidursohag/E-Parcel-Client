import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";


const MainLayout = () => {
return(
    <div className="font-ubuntu">
        <NavBar/>
       <Outlet/>
   </div>
)}
export default MainLayout;