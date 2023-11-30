import axiosSecure from "./axiosSecure";

// Save review Data in db
export const addReviewData = async (reviewdata) => {
   const { data } = await axiosSecure.post('/add-review', reviewdata);
   return data;
}

// get review by Delivery man Id
export const getAllReviewData = async ({ deliveryManId }) => {
   console.log(deliveryManId);
   const { data } = await axiosSecure.get(`/all-Review-data?deliveryManId=${deliveryManId}` );
   return data;
}