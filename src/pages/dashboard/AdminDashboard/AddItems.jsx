import { useForm } from "react-hook-form";
import SectionTitle from "../../../components/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

const AddItems = () => {
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
      const menuRes = await axiosSecure.post("/menu", menuItem);
      console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        // show success pop up
        reset();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${data?.name} is added to the menu.`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    }
    console.log("with use image url ", res.data);
  };
  return (
    <div>
      <SectionTitle heading="add an items" SubHeading="-----what's new?-----" />

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
            />
          </div>

          <div className="flex flex-col md:flex-row gap-6 justify-between">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category*</span>
              </label>
              <select
                defaultValue="default"
                {...register("category", { required: true })}
                className="select select-bordered w-full "
              >
                <option disabled value="default">
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
                placeholder="Recipe name"
                className="input input-bordered w-full "
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
            ></textarea>
          </div>

          <div className="form-control w-full my-6">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full max-w-xs"
            />
          </div>
          <button className="btn mt-6 bg-[#835D23] text-white">
            Add Item <FaUtensils />
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
