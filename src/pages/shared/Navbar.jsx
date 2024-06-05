import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { VscDiffRenamed } from "react-icons/vsc";
import { CiLogout } from "react-icons/ci";
import { BiCart } from "react-icons/bi";
import useCart from "../../hooks/useCart";
import useAdmin from "../../hooks/useAdmin";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [isAdmin]=useAdmin()
  const [cart] = useCart();

  const navLink = (
    <>
      <li className="uppercase">
        <NavLink>HOME</NavLink>
      </li>
      <li className="uppercase">
        <NavLink>CONTACT us</NavLink>
      </li>
      {/* <li className="uppercase">
        <NavLink to='/dashboard'>DASHBOARD</NavLink>
      </li> */}
     
      <li className="uppercase">
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li className="uppercase">
        <NavLink to="/order/salad">Our Shop</NavLink>
      </li>
{
  user&& isAdmin &&  <li className="uppercase">
  <NavLink to='/dashboard/admin-home'>DASHBOARD</NavLink>
</li>

}
{
  user&& !isAdmin &&  <li className="uppercase">
  <NavLink to='/dashboard/user-home'>DASHBOARD</NavLink>
  </li>
}

    </>
  );
  return (
    <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black container mx-auto">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navLink}
          </ul>
        </div>
        <Link className="btn btn-ghost text-xl  ">
          <div className="flex flex-col">
            <p>BISTRO BOSS</p> <p>Restaurant</p>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className=" flex justify-between  gap-6">{navLink}</ul>
      </div>
      <div className="navbar-end">
        <Link to="/dashboard/cart">
          <button className="flex  items-center">
            <BiCart className="mr-[2px] text-2xl" />
            <div className="badge badge-secondary"> + {cart?.length}</div>
          </button>
        </Link>
        {user ? (
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar ">
              <div className="w-10 rounded-full">
                <img
                  referrerPolicy="no-referrer"
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/YfrC5vT/user-removebg-preview.png"
                  }
                  alt="Mehedi"
                />
              </div>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[3]  shadow-base-100 bg-orange-600 rounded-box w-52 border "
            >
              <li className="border px-6 py-2  rounded-xl flex flex-row ">
                <button className="btn btn-sm btn-ghost ">
                  {" "}
                  <span>
                    <VscDiffRenamed />
                  </span>
                  {user?.displayName || "User Not found"}{" "}
                </button>
              </li>

              <li className="border px-6 py-2 rounded-xl">
                <button onClick={logOut} className="btn btn-sm btn-ghost ">
                  {" "}
                  <span>
                    <CiLogout />
                  </span>
                  Logout{" "}
                </button>
              </li>
            </ul>
          </div>
        ) : (
          <div className="flex gap-0">
            <Link
              to="/login"
              className="btn bg-blue-500 border-none btn-outline text-sm md:text-xl lg:text-2xl md:font-bold text-white"
            >
              LogIn
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
