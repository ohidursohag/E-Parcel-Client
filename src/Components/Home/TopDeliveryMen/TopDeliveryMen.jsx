import { Swiper, SwiperSlide } from 'swiper/react';
import DeliveryManCard from "../../Cards/DeliveryManCard";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
const TopDeliveryMen = () => {
return(
   <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-5">Our Top Delivery Mens</h1>
      <div>
         <Swiper
            
            slidesPerView={1}
            spaceBetween={20}
            pagination={{
               clickable: true,
            }}
            autoplay={{
               delay: 2000,
               disableOnInteraction: false,
            }}
            
            breakpoints={{
               640: {
                  slidesPerView: 1,
                  
               },
               768: {
                  slidesPerView: 2,
                  
               },
               1024: {
                  slidesPerView: 3,
                  
               },
               1280: {
                  slidesPerView: 3,                 
               },

            }}
            modules={[Autoplay,Pagination]}
            className="mySwiper"
         >
            <SwiperSlide><DeliveryManCard /></SwiperSlide>
            <SwiperSlide><DeliveryManCard /></SwiperSlide>
            <SwiperSlide><DeliveryManCard /></SwiperSlide>
            <SwiperSlide><DeliveryManCard /></SwiperSlide>
            <SwiperSlide><DeliveryManCard /></SwiperSlide>
            <SwiperSlide><DeliveryManCard /></SwiperSlide>
            
         </Swiper>
       </div>
   </div>
)}
export default TopDeliveryMen;