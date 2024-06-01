import { FaAd, FaBook, FaCalendar, FaCartPlus, FaFileContract, FaHome, FaList,  FaUsers, FaUtensils } from "react-icons/fa";
import { FaMoneyCheckDollar, FaShop} from "react-icons/fa6";
import { IoMdMenu } from "react-icons/io";

import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import { BiMenu } from "react-icons/bi";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

  const [cart]=useCart()
  const  [isAdmin ]= useAdmin()

  return (
    <div className="flex">
      <div className="w-64 min-h-screen  bg-orange-400">
        <ul className="menu p-4 uppercase">

          {/* dashboard sidebar */}
          {
            isAdmin ? <>
            <li>
            <NavLink to="/dashboard/adminHome">
                <FaHome/>
              admin home
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/addItems">
                <FaUtensils/>
             Add items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-items">
            <BiMenu />
            manage items
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/manage-bookings">
                <FaBook/>
             Manage bookings
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard/all-users">
                <FaUsers/>
                all users
            </NavLink>
          </li>
          
            
            
            </> :
            <>
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
             ({cart.length} )My cart
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
            </>
          }


          {/* common links  */}

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
