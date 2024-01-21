import CountUp from "react-countup";

const Status = ({ allBookings }) => {
  //   console.log(allBookings);
  return (
    <>
      <div className="flex w-max mx-auto mt-10 flex-col sm:flex-row text-center justify-center items-center divide-orange-500 divide-y-8 sm:divide-x-8 sm:divide-y-0 ">
         <div className="p-5 w-full h-full">
         <div className="font-bold text-orange-500 text-4xl sm:text-5xl lg:text-6xl font-railway mb-5 text-center ">
              <CountUp
                end={allBookings?.data?.totalParcelBooked}
                duration={3}
              />
              +
            </div>
            <h3 className="text-xl  lg:text-2xl font-bold">Total Parcel Booked</h3>
         </div>
    
         <div className="py-5 md:px-10 sm:py-0 w-full h-full">
         <div className="font-bold text-orange-500 text-4xl sm:text-5xl lg:text-6xl font-railway mb-5 text-center ">
              <CountUp
                end={allBookings?.data?.totalDelivered}
                duration={3}
              />
              +
            </div>
            <h3 className="text-xl  lg:text-2xl font-bold">Total Parcel Delivered</h3>
         </div>
         
         <div className="p-5 w-full h-full">
         <div className="font-bold text-orange-500 text-4xl sm:text-5xl lg:text-6xl font-railway mb-5 text-center ">
              <CountUp
                end={allBookings?.data?.userCount}
                duration={3}
              />
              +
            </div>
            <h3 className="text-xl  lg:text-2xl font-bold">Total User</h3>
         </div>
         
      </div>
    </>
  );
};
import PropTypes from "prop-types";
Status.propTypes = {
  allBookings: PropTypes.object,
};
export default Status;
