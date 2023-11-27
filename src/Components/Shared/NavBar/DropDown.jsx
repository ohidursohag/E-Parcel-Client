import {  useState } from "react";
import useAuth from "../../../Hooks/useAuth";
import { AiOutlineMenu } from "react-icons/ai";
import avatarImg from '../../../assets/image/avatar.webp'
import { Link, NavLink } from "react-router-dom";
const DropDown = () => {
   const { user, logOut } = useAuth()
   const [isOpen, setIsOpen] = useState(false)
   

   return (
      <div className="">
         <div
            // onClick={() => handleDropDown}
            onClick={() => setIsOpen(!isOpen)}
            className='px-2 py-1 md:py-1 md:px-2 border-[1px] bg-orange-500 border-neutral-200 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
         >
            <AiOutlineMenu color="white" />
            <div className=''>
               {/* Avatar */}
               <img
                  className='rounded-full'
                  referrerPolicy='no-referrer'
                  src={user && user.photoURL ? user.photoURL : avatarImg}
                  alt='profile'
                  height='30'
                  width='30'
               />
            </div>
         </div>
         {isOpen && (
            <div className='absolute rounded-xl shadow-md min-w-[100px] md:w-[200px]   py-5  bg-white overflow-hidden right-0  text-sm'>
               <div className='flex flex-col cursor-pointer '>
                  {
                     user && <p className="text-lg text-center px-2 font-medium text-gray-400">{user?.displayName.slice(0,16)}</p>
                  }
                  <NavLink to='/' className={({ isActive }) => isActive ? 'text-orange-500 hover:bg-orange-100 underline font-semibold md:hidden px-3 py-2' : 'text-gray-600 hover:bg-orange-100 font-semibold text-lg md:hidden'}>Home</NavLink>
               
                  {user ? (
                     <>
                        <Link
                           to='/dashboard'
                           className=' hover:bg-orange-100 text-gray-600 transition font-semibold px-3 py-2'
                        >
                           Dashboard
                        </Link>
                        <div
                           onClick={logOut}
                           className=' hover:bg-orange-100 text-gray-600 px-3 py-2 transition font-semibold cursor-pointer'
                        >
                           Logout
                        </div>
                     </>
                  ) : (
                     <>
                           <Link to='/login' className= 'hover:bg-orange-100 text-gray-600 px-3 py-2 font-semibold  '>Login</Link>

                           <Link to='/register' className= 'hover:bg-orange-100 text-gray-600 px-3 py-2 font-semibold '>Register</Link>                       
                     </>
                  )}
               </div>
            </div>
         )}
      </div>
   )
}
export default DropDown;