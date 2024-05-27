const FoodCard = ({item}) => {
    const {image, name, category, recipe, price}=item
  return (
    <div>
      <div className="w-full h-full rounded-md shadow-md bg-[#F3F3F3]">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500 relative"
        />
       
        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide text-[#151515]">
             {name}
            </h2>
            <p className="text-[#737373]">
              {recipe}
            </p>
            <p className="bg-slate-900 text-white w-[20%]  px-4 py-1 shadow-lg rounded-md mt-4 ">${price}</p>
          </div>
          <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#E8E8E8] text-[#BB8506] uppercase btn-outline"
          >
           Add to card
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
