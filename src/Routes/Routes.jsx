/* eslint-disable react-refresh/only-export-components */
import { Suspense, lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
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
import UpdateProfile from "../Pages/Dashboard/Common/UpdateProfile";
import PaymentHistory from "../Pages/Dashboard/User/PaymentHistory";
import LoadingAnimation from "../Components/Shared/LoadingAnimation/LoadingAnimation";
// import Login from "../Pages/Login/Login";
// import Register from "../Pages/Register/Register";
const Login = lazy(() => import("../Pages/Login/Login"));
const Register = lazy(() => import("../Pages/Register/Register"));
const Pricing = lazy(() => import("../Pages/Pricing/Pricing"));
const ContactUs = lazy(() => import("../Pages/ContactUs/ContactUs"));
const AboutUs = lazy(() => import("../Pages/AboutUs/AboutUs"));
const DashboardLayout = lazy(() => import("../Layouts/DashboardLayout"));

const myCreatedRoutes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      {
        path: "contact-us",
        element: (
          <Suspense fallback={<LoadingAnimation />}>
            <ContactUs />
          </Suspense>
        ),
      },
      {
        path: "about-us",
        element: (
          <Suspense fallback={<LoadingAnimation />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "pricing",
        element: (
          <Suspense fallback={<LoadingAnimation />}>
            <Pricing />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/login",
    element: <Suspense fallback={<LoadingAnimation />}>
      <Login />
    </Suspense>,
  },
  {
    path: "/register",
    element:<Suspense fallback={<LoadingAnimation />}>
       <Register />
    </Suspense>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Suspense fallback={<LoadingAnimation />}>
          <DashboardLayout />
        </Suspense>
      </PrivateRoute>
    ),
    children: [
      {
        path: "profile",
        element: (
          <PrivateRoute>
            <Profile />
          </PrivateRoute>
        ),
      },
      {
        path: "update-profile",
        element: (
          <PrivateRoute>
            <UpdateProfile />
          </PrivateRoute>
        ),
      },
      {
        path: "user/parcel-booking",
        element: (
          <PrivateRoute>
            <UserRoute>
              <BookAParcel />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "user/update-booking/:id",
        element: (
          <PrivateRoute>
            <UserRoute>
              <UpdateBookingsData />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "user/statistics",
        element: (
          <PrivateRoute>
            <UserRoute>
              <UserStatistics />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "user/my-payment-history",
        element: (
          <PrivateRoute>
            <UserRoute>
              <PaymentHistory />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "user/my-parcels",
        element: (
          <PrivateRoute>
            <UserRoute>
              <MyParcels />
            </UserRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "admin/statistics",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AdminStatistics />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "admin/all-parcels",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllParcel />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "admin/all-users",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllUsers />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "admin/all-delivery-men",
        element: (
          <PrivateRoute>
            <AdminRoute>
              <AllDeliveryMen />
            </AdminRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "deliveryMan/statistics",
        element: (
          <PrivateRoute>
            <DeliveryMenRoute>
              <DeliveryManStatistics />
            </DeliveryMenRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "deliveryMan/my-delivery-list",
        element: (
          <PrivateRoute>
            <DeliveryMenRoute>
              <MyDeliveryList />
            </DeliveryMenRoute>
          </PrivateRoute>
        ),
      },
      {
        path: "deliveryMan/my-reviews",
        element: (
          <PrivateRoute>
            <DeliveryMenRoute>
              <MyReviews />
            </DeliveryMenRoute>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default myCreatedRoutes;
