import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";
import menuImg from "../../assets/menu/banner3.jpg";
import dessertImg from "../../assets/menu/dessert-bg.jpg";
import pizzaImg from "../../assets/menu/pizza-bg.jpg";
import saladImg from "../../assets/menu/salad-bg.jpg";
import soupImg from "../../assets/menu/soup-bg.jpg";
import UseMenu from "../../hooks/UseMenu";
import SectionTitle from "../../components/SectionTitle";
import MenuCategory from "./MenuCategory";

const Menu = () => {
  const [menu] = UseMenu();

  const offered = menu.filter((item) => item.category === "offered");
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");

  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");

  return (
    <div>
      <Helmet>
        <title>Bistro boss | Menu</title>
      </Helmet>

      <Cover
        img={menuImg}
        title={"Our menu"}
        description={"Would you like to try a dish?"}
      />

      {/* main cover  */}
      <SectionTitle
        heading={"TODAY'S OFFER"}
        SubHeading={"---Don't miss---'t"}
      ></SectionTitle>
      {/* offered items */}
      <MenuCategory items={offered} />

      {/* dessert menu items  */}
      <MenuCategory items={dessert} title={"Dessert"} Img={dessertImg} description={'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
      <MenuCategory items={pizza} title={"Pizza"} Img={pizzaImg}  description={'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />

      <MenuCategory items={salad} title={"salad"} Img={saladImg}  description={'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
      <MenuCategory items={soup} title={"soup"} Img={soupImg}  description={'Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'} />
    </div>
  );
};

export default Menu;
