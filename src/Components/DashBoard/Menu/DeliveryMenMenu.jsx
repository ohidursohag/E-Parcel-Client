import { FaClipboardList } from "react-icons/fa6";
import { GiStarsStack } from "react-icons/gi";
import DashboardMenuItem from "../SideBar/DashboardMenuItem";

const DeliveryMenMenu = () => {
  return (
    <>
      <DashboardMenuItem
        icon={FaClipboardList}
        label="My Delivery List"
        address="/dashboard/deliveryMan/my-delivery-list"
      />
      <DashboardMenuItem
        icon={GiStarsStack}
        label="My Reviews"
        address="/dashboard/deliveryMan/my-reviews"
      />
    </>
  );
};
export default DeliveryMenMenu;
