import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Login/Register";
import DashboardLayout from "../Layouts/DashboardLayout";

const myCreatedRoutes = createBrowserRouter([
   {
      path: '/',
      element: <MainLayout />,
      children: [
         {index: true, element: <Home />},
      ]
   },
   { path: '/login', element: <Login /> },
   { path: '/signup', element: <Register /> },
   {
      path: '/dashboard',
      element: <DashboardLayout />,
      children: [
         
      ]
   }
])

export default myCreatedRoutes