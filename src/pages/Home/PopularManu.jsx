import { useEffect, useState } from "react";
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../shared/MenuItem";

const PopularManu = () => {
  const [menu, setMenu] = useState([]);
  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const popularItems = data.filter((item) => item.category === "popular");
        setMenu(popularItems);
      });
  }, []);
  return (
    <section className="my-16">
      <SectionTitle
        heading={"FROM OUR MENU"}
        SubHeading={"---Check it out---"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {menu.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <button className="btn btn-outline uppercase text-white border-0 border-b-4 block bg-orange-600 mt-5 mx-auto">
        View full menu
      </button>
    </section>
  );
};

export default PopularManu;
