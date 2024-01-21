import { Swiper, SwiperSlide } from 'swiper/react';
import DeliveryManCard from "../../Cards/DeliveryManCard";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';

const TopDeliveryMen = ({ allBookings }) => {
   // console.log(allBookings);
   const topDeliveryMan = allBookings?.data?.topDeliveryMan
   // console.log(topDeliveryMan);
   return (
      <div>
         <SectionTitle>Our Top Delivery Mens</SectionTitle>
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
               modules={[Autoplay, Pagination]}
               className="mySwiper"
            >
               {
                  topDeliveryMan?.map(deliveryMan => <SwiperSlide key={deliveryMan?._id}>
                     <DeliveryManCard deliveryMan={deliveryMan} />
                  </SwiperSlide>)
               }
            </Swiper>
         </div>
      </div>
   )
}

import PropTypes from 'prop-types';
import SectionTitle from '../../Shared/Utilities/SectionTitle';
TopDeliveryMen.propTypes = {
   allBookings: PropTypes.object
}
export default TopDeliveryMen;