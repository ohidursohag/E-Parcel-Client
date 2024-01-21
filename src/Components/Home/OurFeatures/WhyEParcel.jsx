import { useState } from "react";

const ourFeatures = [
  {
    title: "Super Fast Delivery Service",
    description:
      "Our team works round the clock to ensure fastest delivery and minimize cancellation ratio so that we, as a business partner, can ensure our customer’s growth.",
    icon: "FaShippingFast",
    path: "fa",
  },
  {
    title: "Cash on Delivery (COD)",
    description:
      "We collect cash from your customer and transfer it to you on time through a formal banking channel, and of course with all the detailed supporting information.",
    icon: "BsCashCoin",
    path: "bs",
  },
  {
    title: "Wide Coverage",
    description:
      "We have a dedicated delivery channel of 350+ delivery agents in Dhaka and Chattogram. We have partnered with 50+ franchises all over the country as well.",
    path: "fa",
    icon: "FaMapMarkedAlt",
  },
  {
    title: "Secure & Faster Payment Service",
    description:
      "At Steadfast Courier you can request for your payment every six days of the week. We Courier provides multiple payment methods such as cash, Bkash or Rocket payment. Also you can collect the money simply by transferring your current balance to your preferred Bank. Our faster and secure payment service will provide the ultimate solution to your payment problem which can occur using a logistics service.",
    path: "ri",
    icon: "RiSecurePaymentFill",
  },
  {
    title: "Online Management",
    description:
      "With our simple and easy to use user interface you can get all the information you need in your own user dashboard. You can view your user dashboard to stay updated. Whether it’s about a parcel or payment, you can get all of your information with just simple clicks.",
    path: "hi2",
    icon: "HiMiniComputerDesktop",
  },
  {
    title: "Advanced Customer Service",
    description:
      "Our Call Center Executives are always ready 24/7 to help you with your problems. They are fast, well trained, reliable and always ready to solve your problems. Also you can contact us on our Facebook page as well. Our Facebook page admins are always active to give you feedbacks.",
    path: "ri",
    icon: "RiCustomerService2Fill",
  },
];
const WhyEParcel = () => {
  // toggle state and function
  const [isOpen, setIsOpen] = useState(null);
  const handleToggle = (idx) =>
    setIsOpen((prevIdx) => (prevIdx === idx ? null : idx));

  return (
    <div className="flex justify-center">
      <div className="rounded-lg mt-5  grid grid-cols-1 md:grid-cols-2 gap-5 lg:gap-10">
        {/* maping each accordion  */}
        {ourFeatures.map((feature, idx) => {
          return (
            <div
              key={idx}
              onClick={() => handleToggle(idx)}
              className="flex items-center"
            >
              {/* the index div  */}
              <div className="w-16 h-16 bg-orange-500 flex justify-center items-center text-white text-xl sm:text-2xl md:text-xl lg:text-2xl font-bold rounded-xl ">
                <span>0{idx + 1}</span>
              </div>
              <div className="w-10 h-[2px] bg-orange-500 relative">
                <span className="w-3 h-3 bg-white absolute -left-2 -top-[5px] z-40 rounded-full border-2 border-orange-500"></span>
                <div>
                  {/* <span className="bg-orange-500 w-10 h-1"></span> */}
                </div>
              </div>
              {/* main accordion div  */}
              <div>
                <div className="max-w-[450px] bg-sky-50 shadow-md border-t-[12px] p-3 border-orange-500 relative cursor-pointer">
                  <span className="h-0 w-0 border-b-[40px] border-b-transparent border-r-[40px] border-r-orange-500 absolute top-0 right-0"></span>
                  <span className="h-0 w-0 border-t-[40px] border-t-orange-500 border-r-[40px] border-r-transparent absolute top-0 left-0"></span>
                  <h1 className="text-gray-700 font-medium text-lg sm:text-xl md:text-lg lg:text-xl text-center">
                    {feature.title}
                  </h1>
                </div>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-in-out  ${
                    isOpen === idx
                      ? "grid-rows-[1fr] opacity-100"
                      : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className=" max-w-[450px] rounded-br-xl rounded-bl-xl bg-orange-500 text-white p-6  text-justify">
                      {feature.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhyEParcel;
