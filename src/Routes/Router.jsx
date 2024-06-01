import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dashboard/Cart";
import PrivateRoute from "./PrivateRoute";
import AllUsers from "../pages/dashboard/AdminDashboard/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout/>,
    children:[
      {
        path:'/',
        element:<Home/>
      },
      {
        path:'/menu',
        element:<Menu/>
      },
      {
        path:'/order/:category',
        element: <Order/>
      },
      {
        path:'/login',
        element:<Login/>
      },
      {
        path:'/signUp',
        element:<SignUp/>
      }
    ]
  },
  {
    path:'dashboard',
    element: <PrivateRoute><Dashboard/></PrivateRoute>,
    children:[
      {
        path:'cart',
        element:<Cart/>,
      },

      //admin routes

      {
        path:'all-users',
        element:<AllUsers/>
      }
    ]
  }
]);


 