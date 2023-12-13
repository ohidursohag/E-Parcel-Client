import PropTypes from 'prop-types';
import useClickOutSide from '../../Hooks/useClickOutSide';
import AOS from 'aos';
import PaymentForm from '../Form/PaymentForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GETWAY_PK)
const PaymentModal = ({ isShowPaymentModal, setIsShowPaymentModal, bookingData }) => {
   AOS.init();
   const refWraper = useClickOutSide(setIsShowPaymentModal)
   // console.log(bookingData);
   const closeModal = () => {
      setIsShowPaymentModal(false);
   };
   return (
      <>
         {
            isShowPaymentModal
               ? <div className='bg-black/40 backdrop-blur-[4px] w-full h-screen top-0 left-0 fixed flex justify-center items-center'>
                  <div
                     ref={refWraper}
                     data-aos="zoom-out"
                     data-aos-anchor-placement="center-bottom"
                     data-aos-duration="1000"
                     className=" md:min-w-[450px]   bg-gray-400/70 rounded-xl p-10 backdrop-blur flex justify-center items-center relative">
                     <div className=" w-full flex flex-col gap-4 m-4 ">
                        <h1 className="text-3xl text-center text-gray-700 font-bold">Make Payment</h1>
                        <div>
                           <div className="  ">
                              <div className="  pb-1 "><span className=" font-medium text-gray-200">Parcel Type:</span> <span className="text-orange-500">{bookingData?.parcelType}</span></div>
                              <div className="  pb-1 "><span className=" font-medium text-gray-200">Parcel Weight:</span> <span className="text-orange-500">{bookingData?.parcelWeight} Kg</span></div>
                              <div className="  pb-1 "><span className=" font-medium text-gray-200">Delivery Coast:</span> <span className="text-orange-500">{bookingData?.bookingPrice} Tk.</span></div>
                           </div>
                        </div>
                        <Elements stripe={stripePromise}>
                           <PaymentForm
                              bookingData={bookingData}
                              closeModal={closeModal}
                           />
                        </Elements>

                     </div>
                  </div>
               </div>
               : ''
         }
      </>
   )
}


PaymentModal.propTypes = {
   isShowPaymentModal: PropTypes.bool,
   setIsShowPaymentModal: PropTypes.func,
   bookingData: PropTypes.object
}
export default PaymentModal;