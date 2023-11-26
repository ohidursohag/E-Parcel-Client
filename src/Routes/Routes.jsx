import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import DashboardLayout from "../Layouts/DashboardLayout";
import ErrorPage from "../Pages/Error/ErrorPage";

const myCreatedRoutes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      errorElement: <ErrorPage/>,
      children: [
         {index: true, element: <Home />},
      ]
   },
   { path: '/login', element: <Login /> },
   { path: '/register', element: <Register /> },
   {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
         
      ]
   }
])

export default myCreatedRoutes