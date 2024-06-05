
import { useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import Swal from "sweetalert2";
import SectionTitle from "../../../components/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const UpdateItem = () => {
    const {state} = useLocation()
    console.log("data =>", state)

  const { register, handleSubmit, reset } = useForm();

  const axiosPublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.patch(`/menu/${state?._id}`, menuItem);
      console.log(menuRes.data);
      if (menuRes.data.modifiedCount > 0) {
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${state?.name} is updated to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with use image url ", res.data);
  };

    return (
        <div>

            <SectionTitle heading='UPDATE ITEM'/>

            <div className="bg-[#F3F3F3] p-12">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control w-full ">
            <label className="label">
              <span className="label-text">Recipe name*</span>
            </label>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe name"
              className="input input-bordered w-full "
              defaultValue={state?.name}
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue={state?.category}
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option defaultValue={state?.category}>
                  Select a Category
                </option>
                <option value="salad">Salad</option>
                <option value="pizza">Pizza</option>
                <option value="soup">Soup</option>
                <option value="dessert">Dessert</option>
                <option value="drinks">Drinks</option>
              </select>
            </div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                {...register("price", { required: true })}
                type="number"
                placeholder="Recipe price"
                className="input input-bordered w-full "
                defaultValue={state?.price}
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text"> Recipe Details*</span>
            </label>

            <textarea
              {...register("recipe", { required: true })}
              placeholder="Recipe Details"
              className="textarea textarea-bordered textarea-lg w-full h-[20vh] "
              defaultValue={state?.recipe}

            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>

          
          <button className="btn mt-6 bg-[#835D23] text-white mx-auto flex">
          Update Recipe Details 
          </button>
        </form>
      </div>
            
        </div>
    );
};

export default UpdateItem;