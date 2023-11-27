import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import ErrorPage from "../Pages/Error/ErrorPage";
import BookAParcel from "../Pages/Dashboard/User/BookAParcel";
import MyParcels from "../Pages/Dashboard/User/MyParcels";
import Profile from "../Pages/Dashboard/Common/Profile";
import PrivateRoute from "./PrivateRoute";
import UserStatistics from "../Pages/Dashboard/User/UserStatistics";
import AdminStatistics from "../Pages/Dashboard/Admin/AdminStatistics";
import DeliveryManStatistics from "../Pages/Dashboard/DeliveryMan/DeliveryManStatistics";
import AllParcel from "../Pages/Dashboard/Admin/AllParcel";
import AllUsers from "../Pages/Dashboard/Admin/AllUsers";
import AllDeliveryMen from "../Pages/Dashboard/Admin/AllDeliveryMen";
import MyDeliveryList from "../Pages/Dashboard/DeliveryMan/MyDeliveryList";
import MyReviews from "../Pages/Dashboard/DeliveryMan/MyReviews";
import DeliveryMenRoute from "./DeliveryMenRoute";
import AdminRoute from "./AdminRoute";
import UserRoute from "./UserRoute";
import UpdateBookingsData from "../Pages/Dashboard/User/UpdateBookingsData";

const myCreatedRoutes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage />,
      children: [
         { index: true, element: <Home /> },
      ]
   },
   { path: '/login', element: <Login /> },
   { path: '/register', element: <Register /> },
   {
      path: '/dashboard',
      element: <PrivateRoute>
         <DashboardLayout />
      </PrivateRoute>,
      children: [
         {
            path: 'profile',
            element: <PrivateRoute><Profile /></PrivateRoute>
         },
         {
            path: 'user/parcel-booking',
            element: <PrivateRoute><UserRoute><BookAParcel /></UserRoute></PrivateRoute>
         },
         {
            path: 'user/update-booking/:id',
            element: <PrivateRoute><UserRoute><UpdateBookingsData /></UserRoute></PrivateRoute>
         },
         {
            path: 'user/statistics',
            element: <PrivateRoute><UserRoute><UserStatistics /></UserRoute></PrivateRoute>
         },
         {
            path: 'user/my-parcels',
            element: <PrivateRoute><UserRoute><MyParcels /></UserRoute></PrivateRoute>
         },
         {
            path: 'admin/statistics',
            element: <PrivateRoute><AdminRoute><AdminStatistics /></AdminRoute></PrivateRoute>
         },
         {
            path: 'admin/all-parcels',
            element: <PrivateRoute><AdminRoute><AllParcel /></AdminRoute></PrivateRoute>
         },
         {
            path: 'admin/all-users',
            element: <PrivateRoute><AdminRoute><AllUsers /></AdminRoute></PrivateRoute>
         },
         {
            path: 'admin/all-delivery-men',
            element: <PrivateRoute><AdminRoute><AllDeliveryMen /></AdminRoute></PrivateRoute>
         },
         {
            path: 'deliveryMan/statistics',
            element: <PrivateRoute><DeliveryMenRoute><DeliveryManStatistics /></DeliveryMenRoute></PrivateRoute>
         },
         {
            path: 'deliveryMan/my-delivery-list',
            element: <PrivateRoute><DeliveryMenRoute><MyDeliveryList /></DeliveryMenRoute></PrivateRoute>
         },
         {
            path: 'deliveryMan/my-reviews',
            element: <PrivateRoute><DeliveryMenRoute><MyReviews /></DeliveryMenRoute></PrivateRoute>
         },
      ]
   }
])

export default myCreatedRoutes