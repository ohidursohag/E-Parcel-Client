import { FaClipboardList } from "react-icons/fa6";
import MenuItem from "../SideBar/MenuItem";
import { GiStarsStack } from "react-icons/gi";

const DeliveryMenMenu = () => {
return(
   <>
        <MenuItem
            icon={FaClipboardList}
            label='My Delivery List'
            address='/dashboard/deliveryMan/my-delivery-list'
        />
        <MenuItem
            icon={GiStarsStack}
            label='My Reviews'
            address='/dashboard/deliveryMan/my-reviews'
        />
   </>
)}
export default DeliveryMenMenu;