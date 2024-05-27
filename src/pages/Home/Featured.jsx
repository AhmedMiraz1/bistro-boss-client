import SectionTitle from "../../components/SectionTitle";

import featuredImg from "../../assets/home/featured.jpg";
import "./Featured.css";

const Featured = () => {
  return (
    <section className="featured-item my-16 bg-fixed ">
      <div className=" bg-slate-500 bg-opacity-70 py-7">
        <SectionTitle 
          heading={"CHEF RECOMMENDS"}
          SubHeading={"---Should Try---"}
          
        />

        <div className="flex flex-col md:flex-row items-center gap-16 py-20 px-36 justify-center">
          <div>
            <img src={featuredImg} alt="" />
          </div>
          <div className="space-y-2 text-white">
            <h3>March 20, 2023</h3>
            <h1 className="uppercase">WHERE CAN I GET SOME?</h1>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Praesentium sit maiores quisquam non ipsum voluptates voluptate
              iste accusantium voluptas necessitatibus
            </p>

            <button className="btn btn-outline uppercase text-white border-0 border-b-4">
              Read more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Featured;
