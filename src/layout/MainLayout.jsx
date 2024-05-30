import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";


const MainLayout = () => {
    const location = useLocation()
    console.log(location);
    const noHeaderFooter = location.pathname.includes('login') || location.pathname.includes('signUp')
    return (
        <div>
            
            <div className="container mx-auto ">
            {noHeaderFooter || <Navbar/>}
            <Outlet/>
            </div>
            <div>
               {noHeaderFooter ||  <Footer/>}
            </div>
        </div>
    );
};

export default MainLayout;