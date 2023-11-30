import axiosSecure from "./axiosSecure";

// get All Users data
export const getAllUserData = async ({role}) => {
   const { data } = await axiosSecure.get(`/all-users?role=${role}`);
   return data;
}


// get Users data by email
export const getUserDatabyEmail = async (email) => {
   const { data } = await axiosSecure.get(`/get-user-data/${email}`);
   return data;
}

// Update User Data in db
export const updateUserData = async (id, updatedData) => {
   console.log(id, updatedData);
   const { data } = await axiosSecure.patch(`/update-user-data/${id}`, updatedData);
   console.log(data);
   return data;
}