import call from "../../../assets/Icon/call.svg";
import { SlLocationPin } from "react-icons/sl";
import { FiMail } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";

import SocialMediaLinks from "../Utilities/SocialMediaLinks";
const ContactAddress = () => {
  return (
    <div className="flex flex-col md:flex-row mb-10">
      <div className="flex-1 w-full ">
        <iframe
          className="border-2 w-full h-[300px] md:h-full"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14598.479799852477!2d90.40699051478593!3d23.832109885633567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c70ad1a88b93%3A0xaf150749058b2469!2sNikunja-2%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1705638008868!5m2!1sen!2sbd"
          loading="lazy"
        ></iframe>
      </div>
      <div
        style={{ backgroundImage: `url(${call})` }}
        className="flex-1 relative bg-no-repeat bg-[length:150px] bg-[left_20px_top_20px] before:bg-gray-700/90 before:absolute before:inset-0 flex  justify-center items-center"
      >
        <div className="z-10 p-[10%] text-white flex flex-col gap-5 lg:gap-10">
          <h1 className="text-4xl font-bold text-orange-500">Find Us</h1>
          <p className="lg:text-xl">
            Your success is our success and there’s more to good service than
            just being fast.
          </p>
          <div className="flex items-center gap-3">
            <SlLocationPin color="#F97316" size={30} /> Nikunjo-2, House-15 Rd
            No. 11, Dhaka 1229
          </div>
          <div className="flex items-center gap-3">
            <IoCallOutline color="#F97316" size={30} /> +880 9642 500 500
          </div>
          <div className="flex items-center gap-3">
            <FiMail color="#F97316" size={30} /> support@e-parcel.com.bd
          </div>
          <SocialMediaLinks/>
        </div>
      </div>
    </div>
  );
};

export default ContactAddress;
