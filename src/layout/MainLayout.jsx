import { Outlet } from "react-router-dom";
import Footer from "../pages/shared/Footer";
import Navbar from "../pages/shared/Navbar";


const MainLayout = () => {
    return (
        <div>
            
            <div className="container mx-auto ">
            <Navbar/>
            <Outlet/>
            </div>
            <div>
                <Footer/>
            </div>
        </div>
    );
};

export default MainLayout;