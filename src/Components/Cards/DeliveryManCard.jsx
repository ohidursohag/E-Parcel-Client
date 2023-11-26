import { Rating, RoundedStar } from '@smastrom/react-rating';
// import PropTypes from 'prop-types';
import '@smastrom/react-rating/style.css'

const DeliveryManCard = () => {
   const CustomRatingStyle = {
      itemShapes: RoundedStar,
      activeFillColor: '#F97316',
      inactiveFillColor: '#ff82297b'
   }
   return (
      <div className=" flex flex-col  bg-white shadow-md  rounded-xl text-gray-700 bg-clip-border mb-7">
         <div className=" mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border">
            <img className='w-full' src="https://docs.material-tailwind.com/img/team-3.jpg" alt="profile-picture" />
         </div>
         <div className="p-6 ">
            <h4 className="block mb-2 text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
               Natalie Paisley
            </h4>
            <div className='text-xl text-gray-500 font-medium mb-2'>
               Parcel Delivered: 
               <span className='text-2xl text-orange-500'> 25</span>
            </div>
            <div className='flex gap-3 items-center '>
               <Rating
                  style={{ maxWidth: 180 }}
                  value={3}
                  readOnly
                  itemStyles={CustomRatingStyle}
               />
               <span className='text-2xl -mb-2 font-bold'>3</span>
            </div>

            

         </div>

      </div>
   )
}


DeliveryManCard.propTypes = {
   
}
export default DeliveryManCard;