import Swal from "sweetalert2";
import useAuth from "../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

const FoodCard = ({ item }) => {
  const { image, name, category, recipe, price, _id } = item;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location =useLocation()
  const axiosSecure =useAxiosSecure()
  const [, refetch]=useCart()

  

  const handelAddToCart = () => {
    if (user && user.email) {
      // TODO :
     const cartItem ={
      menuId :_id,
      email:user.email,
      name,
      image,
      price
     }
     axiosSecure.post('/carts', cartItem )
     .then(res => {
      console.log(res.data);
      if(res.data.insertedId){
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${name} -------Added to your cart `,
          showConfirmButton: false,
          timer: 2000
        });
        refetch();
      }
     })
      
    } 
    
    else {
      Swal.fire({
        title: "You are not logged in  ",
        text: "Please login and add to the cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,Login! ",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user login page
          navigate("/login", {state:{from:location}} );
          console.log(navigate);
        }
      });
    }
  };
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
            <p className="text-[#737373]">{recipe}</p>
            <p className="bg-slate-900 text-white w-[20%]  px-4 py-1 shadow-lg rounded-md mt-4 ">
              ${price}
            </p>
          </div>
          <button
            onClick={ handelAddToCart}
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
