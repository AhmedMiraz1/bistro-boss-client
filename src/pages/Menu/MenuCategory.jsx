import { Link } from "react-router-dom";
import Cover from "../shared/Cover";
import MenuItem from "../shared/MenuItem";

// eslint-disable-next-line react/prop-types
const MenuCategory = ({ items, title, Img, description }) => {
  return (
    <div className="my-16">
      {title && <Cover img={Img} title={title} description={description} />}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
        {items?.map((item) => (
          <MenuItem key={item._id} item={item} />
        ))}
      </div>
      <Link to={`/order/${title}`}>
      <button className="btn btn-outline uppercase text-black border-0 border-b-4 border-b-black flex mx-auto ">
      ORDER YOUR FAVORITE FOOD
      </button>
      </Link>
    </div>
  );
};

export default MenuCategory;
