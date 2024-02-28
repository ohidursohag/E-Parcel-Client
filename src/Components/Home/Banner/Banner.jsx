import Lottie from "lottie-react";
import bg from "../../../assets/image/Banner/hero-header-bg.png";
import bannerAnimation from "../../../assets/lottie/Banner.json";
import Container from "../../Shared/Container";
import { FaTruckArrowRight } from "react-icons/fa6";
import useAuth from "../../../Hooks/useAuth";
import { Link } from "react-router-dom";
import useGetCurrentUser from "../../../Hooks/useGetCurrentUser";
const Banner = () => {
  const { user } = useAuth();
  const { role } = useGetCurrentUser();
  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="min-h-screen bg-opacity-50 w-full bg-cover md:bg-auto md:bg-left-top bg-center bg-no-repeat flex justify-center items-center  relative">
      <Container className="flex flex-col-reverse md:flex-row text-center md:text-left justify-center items-center ">
        <div className="flex-1 space-y-2 lg:space-y-5">
          <h1 className="text-3xl md:text-[35px] lg:text-[45px] xl:text-[60px] leading-none ">
            A Trusted Provider Of <br />{" "}
            <span className="font-bold text-orange-500">Courier Services.</span>
          </h1>
          <p className="text-xl lg:text-2xl mx-auto md:mx-0 w-4/5 sm:w-3/5  italic text-gray-700">
            We deliver your products safely to your home in a reasonable time.
          </p>
          <Link
            to={user?.email ? `/dashboard/${role}/statistics` : "/login"}
            className="text-xl mx-auto md:mx-0 w-max px-5 py-3 bg-orange-500 text-white relative overflow-hidden group z-10 rounded-lg shadow-md flex items-center gap-2">
            <span className="absolute -z-[1] bg-orange-200 rotate-12 -inset-12 group-hover:duration-300 duration-700 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
            <span className="absolute -z-[1] bg-gray-500  rotate-12 -inset-12 group-hover:duration-700 duration-500 scale-x-0 group-hover:scale-x-100 origin-left transform transition-transform"></span>
            <span className="absolute -z-[1] bg-orange-500 rotate-12 -inset-12 group-hover:duration-500 duration-300 scale-x-0 group-hover:scale-x-50 origin-left transform transition-transform"></span>
            Get Started <FaTruckArrowRight />
          </Link>
        </div>
        <div className="flex-1 w-4/5 md:w-3/5 lg:w-full ">
          <Lottie animationData={bannerAnimation} loop={true} />
        </div>
      </Container>
    </div>
  );
};
export default Banner;
