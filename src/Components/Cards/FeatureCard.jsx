import PropTypes from 'prop-types';


const FeatureCard = ({title, shortDescription,children}) => {
return(
   <div className='flex gap-5'>
      <div>

        {children}
       </div>
      <div className=''>
         <h3 className='text-xl font-bold text-gray-700 mb-3'>{title}</h3>
         <p className='font-railway '>{shortDescription}</p>
       </div>
   </div>
)}


FeatureCard.propTypes = {
   title: PropTypes.string,
   shortDescription: PropTypes.string,
   children: PropTypes.node
}
export default FeatureCard;