import { Outlet, useNavigation } from "react-router-dom";
import NavBar from "../Components/Shared/NavBar/NavBar";
import Footer from "../Components/Shared/Footer/footer";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";


const MainLayout = () => {
    const navigation = useNavigation()
return(
    <div className="font-ubuntu">
        <NavBar/>
        <div className="min-h-[calc(100vh-107px)]">
            {
                navigation.state === 'loading' ? <LoadingAnimation /> : <Outlet />
            }
            
        </div>
        <Footer/>
   </div>
)}
export default MainLayout;