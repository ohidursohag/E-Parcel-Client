import { NavLink } from 'react-router-dom'

const MenuItem = ({ label, address, icon: Icon }) => {
  return (
    <NavLink
      to={address}
      end
      className={({ isActive }) =>
        `flex items-center px-10  py-2 cursor-pointer  transition-colors duration-300 transform     hover:text-gray-700 ${
        isActive ? 'bg-orange-500 hover:bg-orange-500  text-black/80' : 'text-gray-600 hover:bg-gray-500'
        }`
      }
    >
      <Icon  className='w-5 h-5 text-white' />

      <span className='mx-4 font-medium text-white'>{label}</span>
    </NavLink>
  )
}
import PropTypes from 'prop-types';
MenuItem.propTypes = {
  label: PropTypes.string,
  address: PropTypes.string,
  icon: PropTypes.func
}
export default MenuItem
