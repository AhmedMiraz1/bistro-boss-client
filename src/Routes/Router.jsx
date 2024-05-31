import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Dashboard from "../layout/Dashboard";
import Cart from "../pages/dashboard/Cart";

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
    element:<Dashboard/>,
    children:[
      {
        path:'cart',
        element:<Cart/>
      }
    ]
  }
]);


 