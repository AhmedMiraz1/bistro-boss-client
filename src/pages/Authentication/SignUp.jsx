import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const SignUp = () => {
  const axiosPublic =useAxiosPublic()
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const {createUser, updateUserProfile}=useContext(AuthContext)
  const navigate = useNavigate()

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password).then(result=> {
        const user = result.user
        console.log(user);
        updateUserProfile(data.name, data.photoURL)
        .then(()=> {
          const userInfo ={
            name:data.name,
            email: data.email
          }
          axiosPublic.post('/users', userInfo)
          .then(res=> {
            if(res.data.insertedId){
              console.log('user added to the database');
              reset();
              Swal.fire({
                  position: "top-end",
                  icon: "success",
                  title: "User created successfully",
                  showConfirmButton: false,
                  timer: 1500
                });
                navigate('/')                                
            }
          })
            
        })

        .catch((error)=> {
            console.log(error.message);
        })
    })
   

  };

  return (
    <div className="w-full  p-4 mx-auto  my-[10%] rounded-md shadow-xl sm:p-8 text-purple-500 flex  flex-col md:flex-row justify-between gap-8 ">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <div>
          <h2 className="mb-3 text-3xl font-semibold text-center">
            Sign Up to your account
          </h2>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm">Name</label>

              <input
                type="text"
                {...register("name", { required: true })}
                name="name"
                id="name"
                placeholder="Enter your name "
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
              {errors.name && (
                <span className="text-red-600">Name field is required</span>
              )}
            </div>
            <div className="space-y-2">
              <label className="text-sm">Photo URL</label>

              <input
                type="text"
                {...register("photoURL", { required: true })}
                
                id="name"
                placeholder="Photo URL "
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
              {errors.photoURL && (
                <span className="text-red-600">Name field is required</span>
              )}
            </div>
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                {...register("email", { required: true })}
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
              {errors.email && (
                <span className="text-red-600">Email field is required</span>
              )}
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                {...register("password", {
                  required: true,
                  minLength: 6,
                  maxLength: 20,
                  pattern:
                    /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/
                })}
                name="password"
                id="password"
                placeholder="Enter your password "
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
              {errors?.password?.type === "required" && (
                <span className="text-red-600">Password field is required</span>
              )}
              {errors?.password?.type === "minLength" && (
                <span className="text-red-600">
                  Password must be 6 characters{" "}
                </span>
              )}
              {errors?.password?.type === "maxLength" && (
                <span className="text-red-600">
                  Password must be less then 20 characters{" "}
                </span>
              )}
              {errors?.password?.type === "pattern" && (
                <span className="text-red-600">
                  Password must have one Uppercase one lowercase one number and
                  one special characters
                </span>
              )}
            </div>
          </div>

          <input
            //   disabled={disabled}
            className="w-full px-8 py-3 font-semibold rounded-md   btn btn-primary text-white "
            type="submit"
            value="Sign in"
          />
        </form>
        <p className="text-sm text-center text-gray-400 mt-6">
          Already have an account ?
          <Link
            to="/login"
            className="focus:underline hover:underline font-bold text-lg"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
