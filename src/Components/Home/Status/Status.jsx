import CountUp from "react-countup";
import deleveredIcon from '../../../assets/Icon/deliveredIcon.png'
import OrderIcon from '../../../assets/Icon/Order.png'
import usersIcon from '../../../assets/Icon/Users.png'

const Status = ({ allBookings }) => {
//   console.log(allBookings);
return(
   <div className="flex justify-center">
      <div className="stats stats-vertical md:stats-horizontal shadow w-full mb-10 max-w-[900px] lg:h-[120px]">

         <div className="stat">
            <div className="stat-figure text-secondary">
               <img className="w-[36px] animate-pulse" src={OrderIcon} alt="" />
            </div>
            <div className="stat-title">Total Parcel Bookings</div>
            <div className="stat-value text-orange-500"><CountUp end={allBookings?.data?.totalParcelBooked} duration={3} /></div>

         </div>

         <div className="stat">
            <div className="stat-figure text-secondary">
               <img className="w-[36px] animate-pulse" src={deleveredIcon} alt="" />
            </div>
            <div className="stat-title">Total Delivered</div>
            <div className="stat-value text-orange-500"><CountUp end={allBookings?.data?.totalDelivered} duration={3} /> </div>
         </div>

         <div className="stat">
            <div className="stat-figure text-orange-500 ">
               <img className="w-[36px] animate-pulse" src={usersIcon} alt="" />
            </div>
            <div className="stat-title">Total Users</div>
            <div className="stat-value text-orange-500">
               <CountUp end={allBookings?.data?.userCount} duration={3} />
            </div>
         </div>
      </div>
   </div>
   )
}
import PropTypes from 'prop-types';
Status.propTypes = {
   allBookings: PropTypes.object
}
export default Status;