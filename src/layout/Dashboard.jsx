import { FaAd, FaCalendar, FaCartPlus, FaFileContract, FaHome, FaList } from "react-icons/fa";
import { FaMoneyCheckDollar, FaShop } from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

import { NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="flex">
      <div className="w-64 min-h-screen  bg-orange-400">
        <ul className="menu p-4 uppercase">
          <li>
            <NavLink to="/dashboard/userHome">
                <FaHome/>
              User Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/reservation">
                <FaCalendar/>
             Reservation
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/payment">
            <FaMoneyCheckDollar />
            Payment history
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/cart">
                <FaCartPlus/>
              My cart
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/review">
                <FaAd/>
             Add Review
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/booking">
                <FaList/>
              My Booking
            </NavLink>
          </li>

          <div className="divider text-white"></div>

          <li>
            <NavLink to="/">
                <FaHome/>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
            <IoMdMenu />
             Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/order/salad">
                <FaShop/>
             Shop
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
                <FaFileContract/>
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="flex-1 p-10">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
