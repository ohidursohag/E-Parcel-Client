import axiosSecure from "./axiosSecure";

// Save User Data in Database
export const saveUserData = async (user, userRole,phone) => {
   const currentUserData = {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
      phoneNumber: phone,
      role: userRole,
      status: 'varified'
   }
   const { data } = await axiosSecure.put(`/create-or-update-user/${user?.email}`, currentUserData);
   return data;
};


//Getting Access token
export const getAccessToken = async (email) => {
   const { data } = await axiosSecure.post(`/auth/access-token`, { email: email });
   return data;
}

// Clear Access Token
export const clearCookie = async () => {
   const { data } = await axiosSecure.get('/logout');
   return data;
}

// getting user role
export const userRole = async (email) => {
   const { data } = await axiosSecure.get(`/get-user-data/${email}`);
   // console.log(data);
   return data?.role;
} 