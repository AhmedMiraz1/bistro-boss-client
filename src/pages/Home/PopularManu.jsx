
import SectionTitle from "../../components/SectionTitle";
import MenuItem from "../shared/MenuItem";
import UseMenu from "../../hooks/UseMenu";

const PopularManu = () => {

  const [menu]=UseMenu()

  const popular = menu.filter(item => item.category === "popular")
 
  return (
    <section className="my-16">
      <SectionTitle
        heading={"FROM OUR MENU"}
        SubHeading={"---Check it out---"}
      ></SectionTitle>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {popular.map((item) => (
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
