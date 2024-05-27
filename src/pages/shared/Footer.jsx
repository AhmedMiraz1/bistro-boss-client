import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";


const Footer = () => {
    return (
        <div>

            <div className="flex ">
                <div className="bg-[#1F2937] text-white w-full text-center py-12 space-y-6">
                    <div className="flex flex-col">
                    <h1>CONTACT US</h1>
                    <a href="">123 ABS Street, Uni 21, Bangladesh</a>
                    <a href="">+88 123456789</a>
                    <a href="">Mon - Fri: 08:00 - 22:00</a>
                    <a href="">Sat - Sun: 10:00 - 23:00</a>
                    </div>

                </div>
                <div className="bg-[#111827] text-white w-full text-center space-y-4 py-12">
                    <h1>Follow US</h1>
                    <a href="">Join us on social media</a>
                    <div className="flex gap-6 justify-center"><span><FaFacebook/></span><span><FaInstagram/></span><span><FaTwitter/></span></div>

                </div>
            </div>
            <div className="bg-[#151515] w-full">
                <p className="text-white text-center py-5">Copyright © CulinaryCloud. All rights reserved</p>
            </div>
            
        </div>
    );
};

export default Footer;