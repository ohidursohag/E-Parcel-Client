
import axiosSecure from "./axiosSecure"


// Save Parcel Booking Data in db
export const addBookingsData = async (bookingdata) => {
   const { data } = await axiosSecure.post('/book-parcel', bookingdata);
   return data;
}
// get single bookings data by id
export const getBookingDataById = async (id) => {
   const { data } = await axiosSecure.get(`/booking-data/${id}`);
   return data;
}
// get User spcific bookings data by email
export const getUserBookingsData = async (email) => {
   const { data } = await axiosSecure.get(`/user-booking-data/${email}`);
   return data;
}

// Update Parcel Booking Data in db
export const updateBookingData = async (id, updatedData) => {
   console.log(id, updatedData);
   const { data } = await axiosSecure.patch(`/update-booking-data/${id}`, updatedData);
   return data;
}