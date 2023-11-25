import PropTypes from 'prop-types';


const Container = ({children}) => {
return(
   <div className='container mx-auto  md:px-5 sm:px-2 px-4'>
      {children}
   </div>
)}


Container.propTypes = {
    children: PropTypes.node
}
export default Container;