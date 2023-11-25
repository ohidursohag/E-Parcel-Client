import axios from "axios";
// import { clearCookie } from "./Auth";

const axiosSecure = axios.create({
   baseURL: 'http://localhost:5000/e-parcel/api/v1/',
   // baseURL: import.meta.env.VITE_BASE_API_URL,
   withCredentials: true,
});
// intercept response and check for unauthorized responses.
// axiosSecure.interceptors.response.use(
//    response => response,
//    async (error) => {
//       console.log('got an error in interceptor -------->', error.response);
//       if (error.response.status === 401 || error.response.status === 403) {
//          await clearCookie();
//          window.location.replace('/login');
//       }
//       return Promise.reject(error)
//    }
// )

export default axiosSecure