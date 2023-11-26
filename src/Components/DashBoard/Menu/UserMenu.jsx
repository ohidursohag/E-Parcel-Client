import MenuItem from "../SideBar/MenuItem";
import { FaBox, FaTruckArrowRight } from "react-icons/fa6";

const UserMenu = () => {
return(
   <>
      <MenuItem
         icon={FaTruckArrowRight}
         label='Book A Parcel'
         address='/dashboard/user/parcel-booking'
      />
      <MenuItem
         icon={FaBox}
         label='My Parcels'
         address='/dashboard/user/my-parcels'
      />
   </>
)}
export default UserMenu;