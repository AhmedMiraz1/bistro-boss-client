const FoodCard = ({item}) => {
    const {image, name, category, recipe, price}=item

    const {user}=useContext

    const handelAddToCart = food => {
      console.log('add to cart', food);
    }
  return (
    <div>
      <div className="w-full h-full rounded-md shadow-md bg-[#F3F3F3]">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 relative"
        />
       
        <div className=" p-6 space-y-8">
          <div className="space-y-2 flex flex-col items-center">
            <h2 className="text-3xl font-semibold tracking-wide text-[#151515]">
             {name}
            </h2>
            <p className="text-[#737373]">
              {recipe}
            </p>
            <p className="bg-slate-900 text-white w-[20%]  px-4 py-1 shadow-lg rounded-md mt-4 ">${price}</p>
          </div>
          <button 
          onClick={ ()=>handelAddToCart(item)}
          
            className="btn btn-outline uppercase text-black border-0 border-b-4  flex mx-auto  border-b-orange-400 bg-slate-200 "
          >
           Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
