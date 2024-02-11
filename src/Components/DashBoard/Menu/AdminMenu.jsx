
import { FaBoxesStacked, FaUsers } from "react-icons/fa6";
import { PiUsersFill } from "react-icons/pi";
import DashboardMenuItem from "../SideBar/DashboardMenuItem";
const AdminMenu = () => {
  return (
    <>
      <DashboardMenuItem
        icon={FaBoxesStacked}
        label="All Parcel"
        address="/dashboard/admin/all-parcels"
      />
      <DashboardMenuItem
        icon={FaUsers}
        label="All Users"
        address="/dashboard/admin/all-users"
      />
      <DashboardMenuItem
        icon={PiUsersFill}
        label="All Delivery Men"
        address="/dashboard/admin/all-delivery-men"
      />
    </>
  );
};
export default AdminMenu;
