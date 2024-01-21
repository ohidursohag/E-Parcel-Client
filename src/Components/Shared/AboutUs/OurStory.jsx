
import about1 from "../../../assets/image/About/About_img1.jpg";
import about2 from "../../../assets/image/About/About_img2.jpg";
import about3 from "../../../assets/image/About/About_img3.jpg";
import about4 from "../../../assets/image/About/About_img4.jpg";
import about5 from "../../../assets/image/About/About_img5.jpg";
import SectionTitle from "../Utilities/SectionTitle";
import SocialMediaLinks from "../Utilities/SocialMediaLinks";
const OurStory = () => {

  return (
    <>
       <div className="flex flex-col md:flex-row items-center ">
          <figure className=" relative w-full md:w-2/5 min-h-[300px] sm:min-h-[450px] md:min-h-[350px] lg:min-h-[450px] xl:min-h-[500px] 2xl:min-h-[600px]">
            <img
              className="max-w-[200px] sm:max-w-[350px] md:max-w-[200px] lg:max-w-[250px] xl:max-w-[300px] 2xl:max-w-[400px] border-4 border-orange-300 rounded-lg shadow-[6px_6px_25px_0px_rgba(249,115,22,.8),-3px_-3px_16px_1px_rgba(249,115,22,.5)] absolute inset-1/2 -translate-x-1/2 -translate-y-1/2"
              src={about1}
              alt=""
            />

            <img
              className="max-w-[120px]  sm:max-w-[200px] md:max-w-[120px] lg:max-w-[160px] xl:max-w-[180px] 2xl:max-w-[220px] border-4 border-orange-300 rounded-lg shadow-[-3px_-3px_6px_0px_rgba(249,115,22,.7),1px_1px_16px_1px_rgba(249,115,22,.5)] absolute   left-0 top-10 md:top-14 lg:top-20"
              src={about2}
              alt=""
            />

            <img
              className="max-w-[120px] sm:max-w-[200px] md:max-w-[120px] lg:max-w-[160px] border-4 xl:max-w-[180px] 2xl:max-w-[220px] border-orange-300 rounded-lg shadow-[3px_-3px_6px_0px_rgba(249,115,22,.7),-1px_1px_16px_1px_rgba(249,115,22,.5)] absolute right-0 top-10 md:top-14 lg:top-20"
              src={about5}
              alt=""
            />

            <img
              className="max-w-[120px] sm:max-w-[200px] md:max-w-[120px] lg:max-w-[160px] border-4 xl:max-w-[180px] 2xl:max-w-[220px] border-orange-300 rounded-lg shadow-[3px_3px_6px_0px_rgba(249,115,22,.7),-1px_-1px_16px_1px_rgba(249,115,22,.5)] absolute   right-0 bottom-10 md:bottom-14 lg:bottom-20 "
              src={about3}
              alt=""
            />

            <img
              className="max-w-[120px] sm:max-w-[200px] md:max-w-[120px] lg:max-w-[160px] xl:max-w-[180px] 2xl:max-w-[220px] border-4 border-orange-300 rounded-lg shadow-[-3px_3px_6px_0px_rgba(249,115,22,.7),1px_-1px_16px_1px_rgba(249,115,22,.5)] absolute left-0 bottom-10 md:bottom-14 lg:bottom-20"
              src={about4}
              alt=""
            />          
          </figure>

          <div className="md:w-3/5 md:p-5 lg:p-10"> 
          <SectionTitle>Our Story</SectionTitle>
          <p className="text-justify">e-Parcel is Bangladesh’s most trusted on-demand last mile logistics network offering tech-enabled one stop delivery solutions. Since its inception in 2014, our vision has been to become the operating system for e-commerce in Bangladesh, through a combination of world-class infrastructure, logistics operations of the highest quality and cutting-edge technology capabilities</p>
          <br />
          <p className="text-justify">We take care of order fulfillment, collection, transport, tracking and delivery of parcels. We are the first in Bangladesh to have created a unique network with home delivery and Store Pickup & Return services which enhances customer experience and rationalizes costs</p>
          <SocialMediaLinks className={'mt-5'}/>
          </div>
        </div>
    </>
  )
};

export default OurStory;
