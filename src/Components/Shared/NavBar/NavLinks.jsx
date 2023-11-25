import { NavLink } from "react-router-dom";
import { IoNotifications } from "react-icons/io5";

const NavLinks = () => {
return(
   <>
      <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-500 underline font-semibold text-lg ' : 'text-gray-600 font-semibold text-lg'}>HOME</NavLink>
      <NavLink to='/dashboard' className={({ isActive }) => isActive ? 'text-orange-500 underline font-semibold text-lg ' : 'text-gray-600 font-semibold text-lg'}>Dashboard</NavLink>
      <NavLink to='/register' className={({ isActive }) => isActive ? 'text-orange-500 underline font-semibold text-lg ' : 'text-gray-600 font-semibold text-lg'}>Login</NavLink>
      <button className='text-gray-600  underline font-semibold text-lg '><IoNotifications /></button>

   </>
)}
export default NavLinks;