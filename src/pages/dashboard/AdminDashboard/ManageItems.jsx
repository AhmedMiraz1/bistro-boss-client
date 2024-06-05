import { FaEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../../components/SectionTitle";
import UseMenu from "../../../hooks/UseMenu";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link } from "react-router-dom";

const ManageItems = () => {
  const [menu, , refetch] = UseMenu();

  const axiosSecure =useAxiosSecure()


  const handelDeleteItem = (item)=> {
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
      }).then(async (result) => {
        if (result.isConfirmed) {


            const res = await axiosSecure.delete(`/menu/${item._id}`)

            console.log(res.data);
            if(res.data.deletedCount > 0){
                refetch()
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${item?.name} has been deleted.`,
                    showConfirmButton: false,
                    timer: 1500,
                  });

            }
        
        }
      });
  }
  return (
    <div>
      <SectionTitle heading="MANAGE ALL ITEMS" SubHeading=" ---Hurry Up!---" />
      <div>

        <h3 className="text-3xl mb-6 uppercase">Total items: {menu?.length}</h3>
        <div className="overflow-x-auto border rounded-t-2xl">
          <table className="table">
            {/* head */}
            <thead>
              <tr className="uppercase bg-orange-500 text-white">
                <th>No</th>
                <th>ITEM IMAGE</th>
                <th>ITEM NAME</th>
                <th>PRICE</th>
                <th>update</th>
                <th>delete</th>
              </tr>
            </thead>
            <tbody>
             {
                menu?.map((item, index)=> <tr key={item._id}>
                <th>{index +1}</th>
                <td>
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img
                        src={item?.image}
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                </td>
                <td>{item?.name}</td>
                <td >{item?.price}</td>
                <td>
                  <Link state={item} to={`/dashboard/update-item/${item._id}`}>
                  <button className="btn btn-ghost btn-xs text-white bg-orange-400"><FaEdit/></button></Link>
                </td>
                <td>
                  <button
                  onClick={()=> handelDeleteItem(item)}
                   className="btn btn-ghost btn-xs text-white bg-red-700"><FaTrashAlt/></button>
                </td>
              </tr> )
             }
              
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageItems;
