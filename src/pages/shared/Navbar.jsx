import { Link, NavLink } from "react-router-dom";


const Navbar = () => {

    const navLink = <>
    <NavLink><a>HOME</a></NavLink>
    <NavLink><a>CONTACT us</a></NavLink>
    <NavLink><a>DASHBOARD</a></NavLink>
    <NavLink><a>Our Menu</a></NavLink>
    <NavLink><a>Our Shop</a></NavLink>
    
    </>
    return (
        <div className="navbar fixed z-10 bg-opacity-30 text-white bg-black container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </div>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              {navLink}
            </ul>
          </div>
          <Link className="btn btn-ghost text-xl  ">
            <div className="flex flex-col">
            <p>BISTRO BOSS</p> <p>Restaurant</p>
            </div>
          </Link>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-6">
            
            {navLink}
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn">Button</a>
        </div>
      </div>
    );
};

export default Navbar;