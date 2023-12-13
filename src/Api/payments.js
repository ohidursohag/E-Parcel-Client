import axiosSecure from "./axiosSecure"

// create payment intent
export const createPaymentIntent = async (price) => {
   const { data } = await axiosSecure.post('/create-payment-intent', price)
   return data
}

// Add PaymentDetails in db
export const addPaymentDetails = async (paymentDetails) => {
   const { data } = await axiosSecure.post('/add-payment-details', paymentDetails);
   return data;
}

// get User spcific Payment history by email
export const getUserPaymentHistory = async (email) => {
   const { data } = await axiosSecure.get(`/user-payment-history/${email}`);
   return data;
}