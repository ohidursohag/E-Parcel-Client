import { Outlet } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import Footer from "../Components/Shared/Footer/footer";


const MainLayout = () => {
return(
    <div className="font-ubuntu">
        <NavBar/>
        <Outlet />
        <Footer/>
   </div>
)}
export default MainLayout;