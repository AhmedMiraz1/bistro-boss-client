import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularManu from "./PopularManu";
import Testimonials from "./Testimonials";



const Home = () => {
    return (
        <div>
           
           <Banner/>

          <div className="my-20">
          <Category/>
          </div>

          <PopularManu/>
          <Featured/>
          <Testimonials/>
           
        </div>
    );
};

export default Home;