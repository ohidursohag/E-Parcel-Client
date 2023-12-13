import { Rating, RoundedStar } from '@smastrom/react-rating';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaRegWindowClose } from 'react-icons/fa';
import { GiStarsStack } from 'react-icons/gi';
import useGetCurrentUser from '../../Hooks/useGetCurrentUser';
import Swal from 'sweetalert2';
import toast from 'react-hot-toast';
import { addReviewData } from '../../Api/reviews';
import AOS from 'aos';
import useClickOutSide from '../../Hooks/useClickOutSide';


const ReviewModal = ({ isShowModal, setIsShowModal, deliveryManId }) => {
    AOS.init();
    const { register, handleSubmit, formState: { errors }, reset } = useForm()
    const [rating, setRating] = useState(0);
    const { currentUser } = useGetCurrentUser();
    // const refWraper = useRef(null)
    const refWraper = useClickOutSide(setIsShowModal)
    const reviewDate = new Date().toLocaleDateString().split('/').join('-');
    const CustomRatingStyle = {
        itemShapes: RoundedStar,
        activeFillColor: '#F97316',
        inactiveFillColor: '#ff82297b'
    }
    const closeModal = () => {
        setIsShowModal(false);
    };


    const onSubmit = (data) => {
        console.log(data);
        Swal.fire({
            title: "Are you sure?",
            text: "You want to Add this item",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Confirm"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const toastId = toast.loading('Review Submiting...');
                const reviewData = {
                    userName: currentUser?.name,
                    userImage: currentUser?.image,
                    feedback: data.feedback,
                    deliveryManId,
                    reviewDate,
                    rating: rating,
                }
                console.log(reviewData);
                try {

                    const reviewRsponse = await addReviewData(reviewData)
                    console.log(reviewRsponse);

                    toast.success('Review Submited', { id: toastId });
                    reset()
                    setRating(0)
                    closeModal();
                } catch (error) {
                    toast.error(error.message, { id: toastId })
                }


            }
        })
    }
    return (
        <>
            {
                isShowModal ? (
                    <div className='bg-black/40 backdrop-blur-[4px] w-full h-screen top-0 left-0 fixed flex justify-center items-center'>
                        <div
                            ref={refWraper}
                            data-aos="zoom-out"
                            data-aos-anchor-placement="center-bottom"
                            data-aos-duration="1000"
                            className="    bg-gray-400/70 rounded-xl p-10 backdrop-blur">
                            <div className=" flex flex-col gap-4 m-4 ">
                                <h1 className="text-3xl text-center text-gray-600 font-bold">Give Review to Delivery Man</h1>

                                <form onSubmit={handleSubmit(onSubmit)}>
                                    <div className='font-medium text-gray-800  mb-1'>Giv Rating<span className="text-red-500">*</span></div>
                                    <div className='flex items-center gap-3'>
                                        <Rating
                                            style={{ maxWidth: 180 }}
                                            value={rating}
                                            onChange={setRating}
                                            isRequired
                                            itemStyles={CustomRatingStyle}
                                        />
                                        <p className='text-2xl font-bold text-orange-700'>{rating}</p>
                                    </div>

                                    <div className='mt-5'>
                                        <label className=" text-lg font-medium ">Write Your Feedback <span className="text-red-500">*</span></label>
                                        <textarea {...register("feedback", { required: true })} placeholder="Share your Experience on our service" rows={5} className="w-full mt-2  bg-white px-5  outline-none pt-5" ></textarea>
                                        {errors.feedback && <span className='text-red-500'>This field is required</span>}
                                    </div>
                                    <div className="my-10 space-x-10 text-center">
                                        <button
                                            type="submit"
                                            className="btn btn-ghost inline-flex  text-lg text-white bg-orange-500   mx-auto rounded-lg ">
                                            <GiStarsStack size={20} /> Submit review
                                        </button>
                                        <button
                                            onClick={() => {
                                                closeModal()
                                                reset()
                                            }
                                                
                                            }
                                            type="button"
                                            className="btn btn-ghost inline-flex  text-lg px-12 text-white bg-red-500   mx-auto rounded-lg">
                                            <FaRegWindowClose size={20} /> Close
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>
                    </div>
                )
                    : ''
            }
        </>
    )
}


ReviewModal.propTypes = {
    isShowModal: PropTypes.bool,
    setIsShowModal: PropTypes.func,
    deliveryManId: PropTypes.string
}
export default ReviewModal;