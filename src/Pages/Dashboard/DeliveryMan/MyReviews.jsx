import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// import required modules
import { Autoplay, Pagination } from 'swiper/modules';
import ReviewCard from '../../../Components/Cards/ReviewCard';
import Title from '../../../Components/Shared/Utilities/Title';
import useGetCurrentUser from '../../../Hooks/useGetCurrentUser';
import { useQuery } from '@tanstack/react-query';
import { getAllReviewData } from '../../../Api/reviews';
import { useEffect } from 'react';
import useUpdateUserData from '../../../Hooks/useUpdateUserData';
const MyReviews = () => {
    const { currentUser } = useGetCurrentUser();
    const { updateUserInfo } = useUpdateUserData()
    const deliveryManId = currentUser?._id;
    console.log(deliveryManId)
    const { data: myReviews } = useQuery({
        queryKey: ['all_reviews', deliveryManId],
        queryFn: async () => await getAllReviewData({ deliveryManId }),
    })
    const averageRating = Number((myReviews?.reduce((total, currentValue) => total + currentValue?.rating, 0) / myReviews?.length).toFixed(1))
    const id = currentUser?._id;
    const totalParcelDelivered= myReviews?.length
    useEffect(() => {
        const updatedUserData = {
            averageRating,
            totalParcelDelivered,
        }
        updateUserInfo({ id, updatedUserData })
    }, [updateUserInfo, averageRating, totalParcelDelivered, id])
   
    // console.log(myReviews);
    // if (isLoading) return;

    // console.log(averageRating);
    return (
        <div>
            <Title title='My Reviews' />
            <div className='flex justify-between mb-5'>
                <div className='text-2xl font-bold text-gray-700 '>Total Reviews: <span className='text-3xl text-orange-500'>{myReviews?.length}</span></div>
                <div className='text-2xl font-bold text-gray-700 '>Average Ratings: <span className='text-3xl text-orange-500'>{averageRating}</span></div>
            </div>
            <div>
                <Swiper
                    slidesPerView={1}
                    spaceBetween={20}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        640: {
                            slidesPerView: 1,

                        },
                        768: {
                            slidesPerView: 1,

                        },
                        1024: {
                            slidesPerView: 2,

                        },
                        1280: {
                            slidesPerView: 2,
                        },

                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >

                    {
                        myReviews?.map(myReview => <SwiperSlide className='' key={myReview?._id}>
                            <ReviewCard myReview={myReview}/>
                        </SwiperSlide>)
                    }
                </Swiper>
            </div>
        </div>
    )
}
export default MyReviews;