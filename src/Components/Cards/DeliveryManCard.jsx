import { Rating, RoundedStar } from '@smastrom/react-rating';
// import PropTypes from 'prop-types';
import '@smastrom/react-rating/style.css'

const DeliveryManCard = ({ deliveryMan }) => {
   const CustomRatingStyle = {
      itemShapes: RoundedStar,
      activeFillColor: '#F97316',
      inactiveFillColor: '#ff82297b'
   }
   return (
      <div className=" flex flex-col  bg-white shadow-md  rounded-xl text-gray-700 bg-clip-border mb-7">
         <div className=" mx-4 mt-4 overflow-hidden text-gray-700 bg-white shadow-lg rounded-xl bg-clip-border h-[300px]">
            <img className='w-full' src={deliveryMan?.image} alt="profile-picture" />
         </div>
         <div className="p-6 ">
            <h4 className="block mb-2 text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
               {deliveryMan?.name}
            </h4>
            <div className='text-xl text-gray-500 font-medium mb-2'>
               Parcel Delivered: 
               <span className='text-2xl text-orange-500'> {deliveryMan?.totalParcelDelivered}</span>
            </div>
            <div className='flex gap-3 items-center '>
               <Rating
                  style={{ maxWidth: 180 }}
                  value={deliveryMan?.averageRating}
                  readOnly
                  itemStyles={CustomRatingStyle}
               />
               <span className='text-2xl -mb-2 font-bold'> {deliveryMan?.averageRating}</span>
            </div>       
         </div>

      </div>
   )
}


import PropTypes from 'prop-types';
DeliveryManCard.propTypes = {
   deliveryMan: PropTypes.object
}
export default DeliveryManCard;