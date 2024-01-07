import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { RxCross1 } from 'react-icons/rx';
import { FaCreditCard } from 'react-icons/fa';
import useAuth from '../../Hooks/useAuth';
import toast from 'react-hot-toast';
import './PaymentForm.css'
import { addPaymentDetails, createPaymentIntent } from '../../Api/payments';
import useUpdateBookingsData from '../../Hooks/useUpdateBookingsData';
import useUserBookings from '../../Hooks/useUserBookings';
const PaymentForm = ({ bookingData, closeModal }) => {
   const { mutate: updateBooking } = useUpdateBookingsData();
   const { refetch: reloadBookingsData } = useUserBookings()
   const [processing, setProcessing] = useState(false);
   const { user } = useAuth()
   const stripe = useStripe();
   const elements = useElements();
   const [cardError, setCardError] = useState('');
   const [clientSecret, setClientSecret] = useState('');
   const bookingPrice = bookingData?.bookingPrice;
   // console.log(bookingData);

   useEffect(() => {
     createPaymentIntent({ price: bookingPrice })
         .then(data => {
            // console.log(data?.clientSecret);
            setClientSecret(data?.clientSecret);
         });
   }, [bookingPrice])

   const handleSubmit = async (e) => {
      e.preventDefault()

      if (!stripe || !elements || !clientSecret) {
         return;
      }

      const card = elements.getElement(CardElement);
      if (!card) {
         return
      }

      setProcessing(true)
      const toastId = toast.loading('Payment Processing ...')

      const { error, paymentMethod } = await stripe.createPaymentMethod({
         type: 'card',
         card,
      })
      if (error) {
         console.log('Payment error', error)
         setProcessing(false)
         setCardError(error.message)
         toast.error(error.message, { id: toastId })
         return;
      } else {
         setCardError('')
         console.log('payment method', paymentMethod)
      }

      // ConFirm Payment 
      const { paymentIntent, error: confirmError } =
         await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
               card: card,
               billing_details: {
                  email: user?.email,
                  name: user?.displayName,
               },
            },
         })

      if (confirmError) {
         console.log(confirmError)
         setCardError(confirmError.message)
         setProcessing(false)
         toast.error(confirmError.message, { id: toastId })
      }

      // console.log('payment intent', paymentIntent)
      if (paymentIntent?.status === 'succeeded') {         
         const paymentDetails = {
            paymentDate: new Date().toLocaleDateString().split('/').join('-'),
            transactionId: paymentIntent.id,
            bookingId: bookingData?._id,
            paidAmount: bookingData?.bookingPrice,
            parcelType: bookingData?.parcelType,
            bookingDate: bookingData?.bookingDate,
            receiverName: bookingData?.receiverName,
            receiverPhone: bookingData?.receiverPhone,
            bookingStatus: bookingData?.status,
            userEmail: user?.email,
         }
         const updatedBookingData = {
            PaymentStatus: 'paid',
            PaymentDate: new Date().toLocaleDateString().split('/').join('-'),
         }
         const id = bookingData?._id;
         try {
            updateBooking({ id, updatedBookingData });
            const res = await addPaymentDetails(paymentDetails)
            console.log(res);
            toast.success('Payment Success', { id: toastId })
            reloadBookingsData()
            setProcessing(false)
            closeModal()
         } catch (error) {
            toast.error(error.message, { id: toastId })
         }


      }



   }
return(
   <>
      <form className='my-2 w-full'
         onSubmit={handleSubmit}
      >
         <CardElement
            options={{
               style: {
                  base: {
                     fontSize: '16px',
                     color: '#424770',
                     backgroundColor: '#ffffff',
                     
                     '::placeholder': {
                        color: '#aab7c4',
                     },
                  },
                  invalid: {
                     color: '#9e2146',
                  },
               },
            }}
         />
         <div className='w-full flex mt-2 justify-center items-center gap-10'>
            <button
               type='button'
               className='btn btn-ghost text-lg px-5 flex-1 text-white bg-[#B91C1C]  hover:bg-[#B91C1C]'
               onClick={closeModal}
            >
               <RxCross1 size={25} color="white" /> Cancel
            </button>
            <button
               type='submit'
               disabled={!stripe || !clientSecret || processing}
               className='btn btn-ghost text-lg px-5  flex-1 text-white bg-[#d1b254]  hover:bg-[#d1b254]'
            > <FaCreditCard size={25} color="white" />
              Pay <span className='text-orange-600'>{` $${bookingData?.bookingPrice} `}</span>
            </button>
         </div>
         <p className="text-red-700 my-2">{cardError || ''}</p>
      </form>
   </>
   )
}

PaymentForm.propTypes = {
   bookingData: PropTypes.object,
   closeModal: PropTypes.func
}
export default PaymentForm;