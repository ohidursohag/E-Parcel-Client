import CountUp from "react-countup";
import deleveredIcon from '../../../assets/Icon/deliveredIcon.png'
import OrderIcon from '../../../assets/Icon/Order.png'
import usersIcon from '../../../assets/Icon/Users.png'

const Status = () => {
return(
   <div className="stats stats-vertical md:stats-horizontal shadow w-full mb-10">

      <div className="stat">
         <div className="stat-figure text-secondary">
            <img className="w-[36px] animate-pulse" src={OrderIcon} alt="" />
         </div>
         <div className="stat-title">Total Parcel Bookings</div>
         <div className="stat-value text-orange-500"><CountUp end={5200} duration={3} /></div>
         
      </div>

      <div className="stat">
         <div className="stat-figure text-secondary">
            <img className="w-[36px] animate-pulse" src={deleveredIcon} alt="" />
         </div>
         <div className="stat-title">Total Delivered</div>
         <div className="stat-value text-orange-500"><CountUp end={4200} duration={3} /> </div>
      </div>

      <div className="stat">
         <div className="stat-figure text-orange-500 ">
            <img className="w-[36px] animate-pulse" src={usersIcon} alt="" />
         </div>
         <div className="stat-title">Total Users</div>
         <div className="stat-value text-orange-500">
            <CountUp end={1200} duration={3}/> 
         </div>
      </div>

   </div>
)}
export default Status;