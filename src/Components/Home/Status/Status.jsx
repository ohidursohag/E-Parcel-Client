import PropTypes from "prop-types";
import StatusCard from "../../Cards/StatusCard";
import {  FaUsers } from "react-icons/fa6";
import { IoCheckbox } from "react-icons/io5";
import Container from "../../Shared/Container";
import { BsBoxSeamFill } from "react-icons/bs";

const Status = ({ allBookings }) => {
  const status = allBookings?.data;
  return (
    <Container>
      <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-y-16 gap-x-5 mb-10">
        <StatusCard
          boxShadow={"shadow-green-500/60 "}
          className={
            "bg-gradient-to-tr  from-green-600 to-green-400 text-white"
          }
          title={"Total User"}
          value={status?.userCount}>
            <FaUsers className='w-8 h-8 text-white' />
          </StatusCard>
        <StatusCard
          boxShadow={"shadow-orange-500/60"}
          className={
            "bg-gradient-to-tr  from-orange-600 to-orange-400 text-white"
          }
          title={"Total Parcel Booked"}
          value={status?.totalParcelBooked}>
            <BsBoxSeamFill  className='w-8 h-8 text-white'/>
          </StatusCard>
        <StatusCard
          boxShadow={"shadow-blue-500/60"}
          className={"bg-gradient-to-tr  from-blue-600 to-blue-400 text-white"}
          title={"Total Parcel Delivered"}
          value={status?.totalDelivered}><IoCheckbox className='w-8 h-8 text-white' /></StatusCard>
      </div>
    </Container>
  );
};

Status.propTypes = {
  allBookings: PropTypes.object,
};
export default Status;
