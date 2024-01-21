import banner from "../../assets/image/Banner/SmallBanner.jpg";
const PageHeader = ({children}) => {

  return (
    <>
       <div
        style={{ backgroundImage: `url(${banner})` }}
        className="h-[250px] md:h-[300px] xl:h-[500px] bg-left-bottom bg-cover lg:bg-center relative overflow-hidden before:absolute before:inset-0 before:block before:bg-gray-900/90 before: before:z-[1]  flex justify-center items-center"
      >
        <div className="relative z-10 w-full text-center flex justify-center items-center">
          <div className="absolute  inset-x-0 text-[60px] md:text-[100px] xl:text-[180px] font-bold z-[-1] leading-none font-inter text-orange-500/20">
          {children}
          </div>
          <h1 className="text-4xl md:text-6xl xl:text-[80px] font-bold leading-none text-orange-300">
          {children}
          </h1>
        </div>
      </div>
    </>
  )
};
import PropTypes from 'prop-types';
PageHeader.propTypes = {
    children: PropTypes.node
};
export default PageHeader;
