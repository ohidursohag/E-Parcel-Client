import { NavLink } from "react-router-dom";
import useUserRole from "../../../Hooks/useUserRole";
import useAuth from "../../../Hooks/useAuth";
// import { IoNotifications } from "react-icons/io5";

const NavLinks = () => {
   const { role } = useUserRole()
   const { user } = useAuth();
   return (
      <>
         <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-500 underline font-semibold text-lg ' : 'text-gray-600 font-semibold text-lg'}>Home</NavLink>
         {
         user?.email &&
            <NavLink to={`/dashboard/${role}/statistics`} className={({ isActive }) => isActive ? 'text-orange-500 underline font-semibold text-lg ' : 'text-gray-600 font-semibold text-lg'}>Dashboard</NavLink>
            
         }

         {/* <NavLink to='/login' className={({ isActive }) => isActive ? 'text-orange-500 underline font-semibold text-lg ' : 'text-gray-600 font-semibold text-lg'}>Login</NavLink> */}
         {/* <button className='text-gray-600  underline font-semibold text-lg '><IoNotifications /></button> */}

      </>
   )
}
export default NavLinks;