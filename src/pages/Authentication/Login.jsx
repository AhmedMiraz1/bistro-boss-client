import { useContext, useEffect, useState } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import Swal from "sweetalert2";

const Login = () => {
  const [disabled, setDisabled] = useState(true);

  const { loginUser, googleLogin } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handelLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    loginUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Swal.fire({
          title: "User Login successfully",
          showClass: {
            popup: `
                animate__animated
                animate__fadeInUp
                animate__faster
              `,
          },
          hideClass: {
            popup: `
                animate__animated
                animate__fadeOutDown
                animate__faster
              `,
          },
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const err = error.message;
        console.log(err);
      });
  };

  const handelValidateCaptcha = (e) => {
    const user_captcha_value = e.target.value;
    console.log(user_captcha_value);

    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  };

  const handelGoogleLogin = async () => {
    try {
      const result = await googleLogin();
      console.log(result.user);

      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Login successfully",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(from, { replace: true });
    } catch (err) {
      console.log(err);
      Swal.fire({
        icon: (err.message,  "error"),
        title: "Oops...",
        text: "Something went wrong!",
        
      });
    }
  };
  return (
    <div className="w-full  p-4 mx-auto  my-[10%] rounded-md shadow-xl sm:p-8 text-purple-500 flex  flex-col md:flex-row justify-between gap-8 ">
      <div>
        <img src="" alt="" />
      </div>
      <div>
        <h2 className="mb-3 text-3xl font-semibold text-center">
          Login to your account
        </h2>

        <div className="my-6 space-y-4">
          <button onClick={handelGoogleLogin} className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
            <FaGoogle />
            <p>Login with Google</p>
          </button>
        </div>
        <div className="flex items-center w-full my-4">
          <hr className="w-full text-gray-400" />
          <p className="px-3 text-gray-400">OR</p>
          <hr className="w-full text-gray-400" />
        </div>
        <form onSubmit={handelLogin} className="space-y-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Enter your email"
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
            </div>
            <div className="space-y-2">
              <div className="flex justify-between">
                <label htmlFor="password" className="text-sm">
                  Password
                </label>
              </div>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Enter your password "
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm">
                {" "}
                <LoadCanvasTemplate />
              </label>

              <input
                type="text"
                onBlur={handelValidateCaptcha}
                // ref={captchaRef}
                name="captcha"
                placeholder="Type the captcha above "
                className="w-full px-3 py-2 border rounded-md border-gray-700 bg-gray-900 text-gray-100 focus:border-violet-400"
              />
             
            </div>
          </div>

          <input
            disabled={disabled}
            className="w-full px-8 py-3 font-semibold rounded-md   btn btn-primary text-white "
            type="submit"
            value="Sign in"
          />
        </form>
        <p className="text-sm text-center text-gray-400 mt-6">
          Don not have account?
          <Link
            to="/signUp"
            className="focus:underline hover:underline font-bold text-lg "
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
