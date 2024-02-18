import PropTypes from "prop-types";
import CountUp from "react-countup";
const StatusCard = ({ children, className, value, title, boxShadow }) => {
  return (
    <div
      className={`relative sm:w-[500px] sm:mx-auto md:w-auto md:mx-0 flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-lg ${boxShadow}`}>
      <div
        className={`bg-clip-border mx-4 rounded-xl overflow-hidden  shadow-lg absolute -mt-10 grid h-20 w-20 place-items-center ${className} ${boxShadow}`}>
        {children}
      </div>
      <div className="py-5 px-5  flex justify-between items-center">
        <p className="block antialiased mt-8 text-2xl font-semibold leading-normal  text-gray-500">
          {title}
        </p>
        <div className="block antialiased tracking-normal text-orange-500 text-6xl font-semibold leading-snug text-blue-gray-900">
          <CountUp end={value} duration={3} />+
        </div>
      </div>
    </div>
  );
};

StatusCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  value: PropTypes.number,
  title: PropTypes.string,
  boxShadow: PropTypes.string,
};
export default StatusCard;
