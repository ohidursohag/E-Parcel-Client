import { useState } from "react";
import SectionTitle from "../Utilities/SectionTitle";
import indideDhaka from "../../../assets/image/insideDhaka.png";
import outsideDhaka from "../../../assets/image/Outside.png";

const Charge = ({weight, charge}) => {
  return (
    <div className="bg-orange-200 p-3 text-center text-gray-700 rounded-lg min-w-[120px] ">
      <p className="text-lg font-medium">{weight}</p>
      <h2 className="text-xl font-bold">৳ {charge}</h2>
    </div>
  );
};

const DeliveryCharges = () => {
  const [deliveryArea, setDeliveryArea] = useState("inside");
  return (
    <div>
      <SectionTitle>Our Delivery Charges</SectionTitle>
      <div className="text-lg  text-center  border-b-2 transition-colors duration-300 font-bold flex gap-x-5 xl:gap-10">
        <div
          onClick={() => setDeliveryArea("inside")}
          className={`inline-block duration-300 border-b-2   cursor-pointer me-2 ${
            deliveryArea === "inside"
              ? " border-b-orange-500  text-orange-500"
              : "border-b-transparent"
          }`}
        >
          Inside Dhaka
        </div>
        <div
          onClick={() => setDeliveryArea("outside48")}
          className={`inline-block duration-300 border-b-2    cursor-pointer ${
            deliveryArea === "outside48"
              ? "border-b-orange-500 text-orange-500"
              : "border-b-transparent"
          }`}
        >
          {`Outside Dhaka (48H)`}{" "}
        </div>
        <div
          onClick={() => setDeliveryArea("outside24")}
          className={`inline-block duration-300  border-b-2   cursor-pointer ${
            deliveryArea === "outside24"
              ? "border-b-2 border-b-orange-500 text-orange-500"
              : "border-b-transparent"
          }`}
        >{`Outside Dhaka (24H)`}</div>
      </div>
      <>
      {/* inside Dhaka */}
      {
        deliveryArea ==='inside' && 
        <div className="flex flex-col md:flex-row shadow-[5px_5px_16px_0px_rgba(249,115,22,.5),-1px_-1px_16px_1px_rgba(249,115,22,.5)] rounded-lg overflow-hidden my-5 2xl:w-4/5 mx-auto">
        <div className="bg-orange-200  md:w-1/2 xl:w-2/5 lg:min-h-[300px] flex justify-center ">
          <img
            className="object-center object-cover"
            src={indideDhaka}
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-5 p-5 xl:gap-10">
          <div className="flex flex-wrap justify-center items-center gap-5">           
            <Charge weight={'Upto 1 Kg'} charge={'60'}/>
            <Charge weight={'1-2 Kg'} charge={'75'}/>
            <Charge weight={'2-3 Kg'} charge={'90'}/>
            <Charge weight={'3-4 Kg'} charge={'105'}/>
            <Charge weight={'4-5 Kg'} charge={'120'}/>
          </div>
          <p className=" font-medium">*15 tk Charge will be added upto 10 kg</p>
        </div>
      </div>
      }
      {/* Outside Dhaka 48H*/}
      {
        deliveryArea ==='outside48' && 
        <div className="flex flex-col md:flex-row shadow-[5px_5px_16px_0px_rgba(249,115,22,.5),-1px_-1px_16px_1px_rgba(249,115,22,.5)] rounded-lg overflow-hidden my-5 2xl:w-4/5 mx-auto">
        <div className="bg-orange-200  md:w-1/2 xl:w-2/5 lg:min-h-[300px] flex justify-center ">
          <img
            className="object-center object-cover"
            src={outsideDhaka}
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-5 p-5 xl:gap-10">
          <div className="flex flex-wrap justify-center items-center gap-5">           
            <Charge weight={'Upto 1 Kg'} charge={'100 + 1% COD'}/>
            <Charge weight={'1-2 Kg'} charge={'150 + 1% COD'}/>
            <Charge weight={'2-3 Kg'} charge={'150 + 1% COD'}/>
            <Charge weight={'3-4 Kg'} charge={'150 + 1% COD'}/>
            <Charge weight={'4-5 Kg'} charge={'150 + 1% COD'}/>
          </div>
          <p className=" font-medium">*15 tk Charge will be added upto 10 kg</p>
        </div>
      </div>
      }
      {/* Outside Dhaka 24H*/}
      {
        deliveryArea ==='outside24' && 
        <div className="flex flex-col md:flex-row shadow-[5px_5px_16px_0px_rgba(249,115,22,.5),-1px_-1px_16px_1px_rgba(249,115,22,.5)] rounded-lg overflow-hidden my-5 2xl:w-4/5 mx-auto">
        <div className="bg-orange-200  md:w-1/2 xl:w-2/5 lg:min-h-[300px] flex justify-center ">
          <img
            className="object-center object-cover"
            src={outsideDhaka}
            alt=""
          />
        </div>
        <div className="flex-1 flex flex-col justify-center items-center gap-5 p-5 xl:gap-10">
          <div className="flex flex-wrap justify-center items-center gap-5">           
            <Charge weight={'Upto 1 Kg'} charge={'150 + 1% COD'}/>
            <Charge weight={'1-2 Kg'} charge={'170 + 1% COD'}/>
            <Charge weight={'2-3 Kg'} charge={'190 + 1% COD'}/>
            <Charge weight={'3-4 Kg'} charge={'210 + 1% COD'}/>
            <Charge weight={'4-5 Kg'} charge={'230 + 1% COD'}/>
          </div>
          <p className=" font-medium">*20 tk Charge will be added upto 10 kg</p>
        </div>
      </div>
      }
      </>
    </div>
  );
};
import PropTypes from 'prop-types';
Charge.propTypes = {
  weight: PropTypes.string,
  charge: PropTypes.string,
};
export default DeliveryCharges;
