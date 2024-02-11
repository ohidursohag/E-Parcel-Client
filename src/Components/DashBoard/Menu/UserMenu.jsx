import { FaBox, FaTruckArrowRight } from "react-icons/fa6";
import { MdPaid } from "react-icons/md";
import DashboardMenuItem from "../SideBar/DashboardMenuItem";
const UserMenu = () => {
  return (
    <>
      <DashboardMenuItem
        icon={FaTruckArrowRight}
        label="Book A Parcel"
        address="/dashboard/user/parcel-booking"
      />
      <DashboardMenuItem
        icon={FaBox}
        label="My Parcels"
        address="/dashboard/user/my-parcels"
      />
      <DashboardMenuItem
        icon={MdPaid}
        label="Payment History"
        address="/dashboard/user/my-payment-history"
      />
    </>
  );
};
export default UserMenu;
