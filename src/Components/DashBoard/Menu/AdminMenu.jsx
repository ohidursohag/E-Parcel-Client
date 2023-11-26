import MenuItem from "../SideBar/MenuItem";
import { FaBoxesStacked, FaUsers } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
const AdminMenu = () => {
return(
    <>
        <MenuItem
            icon={FaBoxesStacked}
            label='All Parcel'
            address='/dashboard/admin/all-parcels'
        />
        <MenuItem
            icon={FaUsers}
            label='All Users'
            address='/dashboard/admin/all-users'
        />
        <MenuItem
            icon={PiUsersFill}
            label='All Delivery Men'
            address='/dashboard/admin/all-delivery-men'
        />
    </>
)}
export default AdminMenu;