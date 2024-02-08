import { Link } from "react-router-dom";
import Logo from "../Logo";
import Container from "../Container";
import { FaLinkedin, FaTwitterSquare } from "react-icons/fa";
import { FaSquareFacebook, FaSquareInstagram } from "react-icons/fa6";
import wave from "../../../assets/svgs/waveTop.svg";
const Footer = () => {
  return (
    <div className=" bg-black text-white">
      <img className="w-full h-" src={wave} alt="" />
      <Container>
        <footer className=" mx-auto flex flex-col lg:flex-row justify-between gap-5 py-10  items-center">
          <div className="max-w-[300px] space-y-2  md:mx-0 mx-auto text-center md:text-left">
            <div className="w-max mx-auto md:mx-0">
              <Logo />
            </div>
            <div className="text-justify">
              Our comprehensive logistics services ensure timely and secure
              delivery for your business
            </div>
          </div>
          <div className="flex flex-1 justify-between flex-col md:flex-row gap-10 lg:gap-0 mt-10">
            <nav className="lg:mx-auto flex gap-1 flex-col">
              <header className="text-lg font-semibold text-orange-500">
                Services
              </header>
              <Link
                to="/"
                className="text-gray-300 hover:text-white duration-300"
              >
                Person 2 Person Delivery (P2P)
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:text-white duration-300"
              >
                Air Parcel
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:text-white duration-300"
              >
                Line Haul
              </Link>
              <Link
                to="/"
                className="text-gray-300 hover:text-white duration-300"
              >
                Merchant Delivery Service
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:text-white duration-300"
              >
                Corporate & SME Delivery
              </Link>
            </nav>
            <nav className="lg:mx-auto flex gap-1 flex-col">
              <header className="text-lg font-semibold text-orange-500">
                Company
              </header>
              <Link
                to=""
                className="text-gray-300 hover:text-white duration-300"
              >
                Our Story
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:text-white duration-300"
              >
                Contact Us
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:text-white duration-300"
              >
                Career
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:text-white duration-300"
              >
                Coverage Map
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:text-white duration-300"
              >
                FAQs
              </Link>
            </nav>
            <nav className="lg:mx-auto flex gap-1 flex-col">
              <header className="text-lg font-semibold text-orange-500">
                Legal
              </header>
              <Link
                to=""
                className="text-gray-300 hover:text-white duration-300"
              >
                Terms of Service
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:text-white duration-300"
              >
                Privacy policy
              </Link>
              <Link
                to=""
                className="text-gray-300 hover:text-white duration-300"
              >
                Packaging Guideline
              </Link>
            </nav>
            <nav className="lg:mx-auto">
              <header className="text-lg font-semibold text-orange-500 mb-2">
                Connect Us
              </header>
              <div className="space-y-2 mb-5">
                <p className="text-gray-300 ">
                  <span className="text-orange-500">Email:</span>{" "}
                  support@e-parcel.com.bd
                </p>
                <p className="text-gray-300 ">
                  <span className="text-orange-500">Call Us:</span> +880 9642
                  500 500
                </p>
              </div>
              <div className="flex gap-5">
                <Link to="">
                  <FaLinkedin
                    color="#f97316"
                    className="hover:scale-110 duration-200"
                    size={30}
                  />{" "}
                </Link>
                <Link to="">
                  <FaSquareFacebook
                    color="#f97316"
                    className="hover:scale-110 duration-200"
                    size={30}
                  />{" "}
                </Link>
                <Link to="">
                  <FaTwitterSquare
                    color="#f97316"
                    className="hover:scale-110 duration-200"
                    size={30}
                  />{" "}
                </Link>
                <Link to="">
                  <FaSquareInstagram
                    color="#f97316"
                    className="hover:scale-110 duration-200"
                    size={30}
                  />{" "}
                </Link>
              </div>
            </nav>
          </div>
        </footer>
      </Container>

      <div className=" py-4 text-center ">
        <h3 className="font-Rancho text-white">
          &copy; 2023{" "}
          <Link
            className="underline text-orange-500 duration-300 hover:text-orange-300"
            to="/"
          >
            E-Parcel
          </Link>{" "}
          ! All Rights Reserved
        </h3>
      </div>
    </div>
  );
};

export default Footer;
