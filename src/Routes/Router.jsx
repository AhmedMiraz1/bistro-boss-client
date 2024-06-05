import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layout/Dashboard";
import MainLayout from "../layout/MainLayout";
import Login from "../pages/Authentication/Login";
import SignUp from "../pages/Authentication/SignUp";
import Home from "../pages/Home/Home";
import Menu from "../pages/Menu/Menu";
import Order from "../pages/Order/Order";
import AddItems from "../pages/dashboard/AdminDashboard/AddItems";
import AllUsers from "../pages/dashboard/AdminDashboard/AllUsers";
import ManageItems from "../pages/dashboard/AdminDashboard/ManageItems";
import UpdateItem from "../pages/dashboard/AdminDashboard/UpdateItem";
import Cart from "../pages/dashboard/userDashboard/Cart";
import AdminRoute from "./AdminRoute";
import PrivateRoute from "./PrivateRoute";
import Payment from "../pages/dashboard/userDashboard/Payment";
import PaymentHistory from "../pages/dashboard/userDashboard/PaymentHistory";
import UserHome from "../pages/dashboard/userDashboard/UserHome";
import AdminHome from "../pages/dashboard/AdminDashboard/AdminHome";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/order/:category",
        element: <Order />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signUp",
        element: <SignUp />,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard />
      </PrivateRoute>
    ),
    children: [
      {
        path: "user-home",
        element: <UserHome />,
      },
      {
        path: "cart",
        element: <Cart />,
      },

      {
        path: "payment",
        element: <Payment />,
      },
      {
        path: "payment-history",
        element: <PaymentHistory />,
      },

      //admin routes

      {
        path: "admin-home",
        element: (
          <AdminRoute>
            <AdminHome />
          </AdminRoute>
        ),
      },

      {
        path: "all-users",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "add-items",
        element: (
          <AdminRoute>
            <AddItems />
          </AdminRoute>
        ),
      },
      {
        path: "manage-items",
        element: (
          <AdminRoute>
            <ManageItems />
          </AdminRoute>
        ),
      },
      {
        path: "update-item/:_id",
        element: (
          <AdminRoute>
            <UpdateItem />
          </AdminRoute>
        ),
      },
    ],
  },
]);
