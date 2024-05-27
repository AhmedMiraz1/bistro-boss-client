import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";

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
      }
    ]
  },
]);


 