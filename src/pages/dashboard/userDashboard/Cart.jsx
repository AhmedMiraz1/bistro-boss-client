import Swal from "sweetalert2";
import useCart from "../../../hooks/useCart";
import { FaTrashAlt } from "react-icons/fa";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  const axiosSecure = useAxiosSecure();

  const handelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/carts/${id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch()
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        console.log(res.data);
        });
      }
    });
  };
  return (
    <div>
      <div className="uppercase flex justify-evenly mb-12">
        <h2 className="text-3xl">Total orders : {cart.length}</h2>
        <h2 className="text-3xl">Total price: {totalPrice}</h2>
        {
          cart.length ?<Link to="/dashboard/payment">
          <button  className="btn bg-orange-500 text-white px-4 uppercase ">
            pay
          </button>
          </Link>: <button  disabled className="btn bg-orange-500 text-white px-4 uppercase ">
            pay
          </button>
        }
      </div>
      <div className="overflow-x-auto border">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="uppercase">
              <th>no</th>
              <th>ITEM IMAGE</th>
              <th>ITEM NAME</th>
              <th>PRICE</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item, idx) => (
              <tr key={item._id}>
                <th>{idx + 1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item.name}</td>
                <td>{item.price}</td>
                <th>
                  <button
                    onClick={() => handelDelete(item._id)}
                    className="btn btn-ghost btn-xs bg-red-600 text-white px-4 "
                  >
                    <FaTrashAlt />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Cart;
