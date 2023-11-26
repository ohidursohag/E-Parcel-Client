import useAuth from "../../../Hooks/useAuth";
import useUserRole from "../../../Hooks/useUserRole";
import Logo from "../../Shared/Logo";
import AdminMenu from "../Menu/AdminMenu";
import DeliveryMenMenu from "../Menu/DeliveryMenMenu";
import UserMenu from "../Menu/UserMenu";
import MenuItem from "./MenuItem";
import { FcSettings } from 'react-icons/fc'
import { GrLogout } from 'react-icons/gr'
import { FaHome } from "react-icons/fa";
import { IoStatsChart } from "react-icons/io5";
const SideBar = () => {
   const { logOut } = useAuth()
   const {role} = useUserRole()
return(
   <>
      <div className="flex justify-center">
         <Logo />
      </div>
      <div className="mt-5  uppercase">
         <MenuItem
            icon={IoStatsChart}
            label='Statistics'
            address={`/dashboard/${role}/statistics`}
         />
         <nav>          
            {/* Host Menu Items */}
            {role === 'user' && <UserMenu />}
            {role === "deliveryMan" && <DeliveryMenMenu />  }
            {role === 'admin' && <AdminMenu />}
         </nav>
         <hr className="border-orange-500 border-2 w-[90%] mx-auto my-10" />
         <MenuItem
            icon={FaHome}
            label='Home'
            address='/'
         />
         <MenuItem
            icon={FcSettings}
            label='Profile'
            address='/dashboard/profile'
         />
         <button
            onClick={logOut}
            className='flex w-full items-center px-10 py-2  text-gray-600 hover:bg-orange-200   hover:text-gray-700 transition-colors duration-300 transform uppercase'
         >
            <GrLogout className='w-5 h-5' />
            <span className='mx-4 font-medium'>Logout</span>
         </button>
         {/* <WebPageNavLinks /> */}
      </div>
   </>
)}
export default SideBar;