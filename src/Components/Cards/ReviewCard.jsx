import { Rating, RoundedStar } from "@smastrom/react-rating";

const CustomRatingStyle = {
   itemShapes: RoundedStar,
   activeFillColor: '#F97316',
   inactiveFillColor: '#ff82297b'
}

const ReviewCard = ({ myReview }) => {
   // console.log(myReview);
   return (
      <div className=" flex min-h-[230px]  bg-white shadow-md  rounded-lg text-gray-700 bg-clip-border mb-7">
         <div className=" w-[35%]  overflow-hidden text-gray-700 bg-white shadow-lg rounded-l-lg bg-clip-border">
            <img className='w-full h-full object-cover object-center' src={myReview?.userImage} alt="profile-picture" />
         </div>
         <div className="p-3 gap-3 w-[60%] flex flex-col">
            <h4 className="block mb-2 text-xl sm:text-2xl  antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
               {myReview?.userName}
            </h4>

            <div className="space-y-3 flex-1">
               <div className='flex gap-3 items-center '>
                  <Rating
                     style={{ maxWidth: 180 }}
                     value={myReview?.rating}
                     readOnly
                     itemStyles={CustomRatingStyle}
                  />
                  <span className='text-2xl -mb-2 font-bold'>{myReview?.rating}</span>
               </div>
               <div className=' text-gray-500 font-medium mb- pr-2'>
                  {myReview?.feedback}
               </div>
            </div>
            <div className="text-right mt-auto">
               {myReview?.reviewDate || '11/30/2023'} 
            </div>
         </div>

      </div>
   )
}
import PropTypes from 'prop-types';
ReviewCard.propTypes = {
   myReview: PropTypes.object
}
export default ReviewCard;