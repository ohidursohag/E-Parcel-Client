import PropTypes from 'prop-types';


const Container = ({ children, className }) => {
return(
   <div className={`container mx-auto  md:px-5 sm:px-2 px-4 ${className}`}>
      {children}
   </div>
)}


Container.propTypes = {
   children: PropTypes.node,
   className: PropTypes.string
}
export default Container;