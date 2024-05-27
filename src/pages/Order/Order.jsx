import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import shopCover from "../../assets/shop/banner2.jpg";
import Cover from "../shared/Cover";
import { useState } from "react";
import UseMenu from "../../hooks/UseMenu";
import FoodCard from "../../components/FoodCard";
import OrderTab from "./OrderTab";

const Order = () => {
  const [tabIndex, setTabIndex] = useState(0);

  const [menu] = UseMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const pizza = menu.filter((item) => item.category === "pizza");

  const salad = menu.filter((item) => item.category === "salad");
  const soup = menu.filter((item) => item.category === "soup");
  const drinks = menu.filter((item) => item.category === "drinks");
  return (
    <div>
      <Cover
        img={shopCover}
        title={"OUR SHOP"}
        description={"Would you like to try a dish?"}
      />

      <div className="flex justify-center">
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <div className="uppercase mt-12 flex justify-center ">
              <Tab>salad</Tab>
              <Tab>pizza</Tab>
              <Tab>soups</Tab>
              <Tab>desserts</Tab>
              <Tab>drinks</Tab>
            </div>
          </TabList>
          <TabPanel>
            <OrderTab items={salad}/>
          </TabPanel>
          <TabPanel>
          <OrderTab items={pizza}/>
          </TabPanel>
          <TabPanel>
          <OrderTab items={soup}/>
           
          </TabPanel>
          <TabPanel>
          <OrderTab items={dessert}/>
          </TabPanel>
          <TabPanel>
          <OrderTab items={drinks}/>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Order;
