import { NavLink } from "react-router-dom";
const DashboardMenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-3 md:px-6 py-2 my-5  transition-colors duration-300 transform rounded-md  ${
          isActive
            ? "bg-orange-500  text-gray-100"
            : "text-gray-600 hover:bg-orange-300 hover:text-gray-700"
        }`
      }
    >
      <Icon className="w-5 h-5" />
      <span className="mx-4 font-medium">{label}</span>
    </NavLink>
  );
};

import PropTypes from 'prop-types';
DashboardMenuItem.propTypes = {
  label: PropTypes.string,
  address: PropTypes.string,
  icon: PropTypes.func,
};
export default DashboardMenuItem;
