import MenuItem from "../SideBar/MenuItem";
import { FaBox, FaTruckArrowRight } from "react-icons/fa6";
import { MdPaid } from "react-icons/md";
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
      <MenuItem
         icon={MdPaid}
         label='My Payment History'
         address='/dashboard/user/my-payment-history'
      />
   </>
)}
export default UserMenu;