import { IoNotifications } from "react-icons/io5";
import Container from "../Container";
import Logo from "../Logo";
import DropDown from "./DropDown";
import NavLinks from "./NavLinks";


const NavBar = () => {
   return (
      <div className="w-full bg-orange-200/50 ">
         <Container>
            <div className="flex justify-between items-center relative py-2">
               <Logo />
               <div className="hidden items-center gap-10 md:flex">
                  <NavLinks />
               </div>
               <div className="flex items-center gap-2">
                  <button className='text-gray-600  underline font-semibold text-lg '><IoNotifications size={30} /></button>
                  <DropDown />
               </div>
            </div>
         </Container>
      </div>
   )
}
export default NavBar;