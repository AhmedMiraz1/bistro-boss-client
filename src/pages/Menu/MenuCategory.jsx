import Cover from "../shared/Cover";
import MenuItem from "../shared/MenuItem";


const MenuCategory = ({items, title, Img, description}) => {
    return (
        
      <div className="my-16">
        {title&& <Cover
        img={Img}
        title={title}
        description={description}
      />}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-10">
      {items?.map((item) => (
        <MenuItem key={item._id} item={item} />
      ))}
    </div>
      </div>
    );
};

export default MenuCategory;