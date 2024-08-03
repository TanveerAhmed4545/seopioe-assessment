/* eslint-disable react/no-unescaped-entities */
import { FaFacebookF } from "react-icons/fa";
import { Link } from "react-router-dom";
import bg1 from "../../assets/images/bg1.jpg";
const Login = () => {
  return (
    <div>
      <div className="flex justify-center items-center min-h-[calc(100vh-306px)] my-12">
        <div className="flex  w-full max-w-sm mx-auto overflow-hidden bg-white   md:max-w-5xl">
          <div className="w-full px-6 py-8 md:px-8 md:w-1/2">
            <div>
              <h2 className="text-4xl text-[#4285F3] mb-3">LOGO</h2>
            </div>

            <p className=" text-2xl  text-[#152A16] font-semibold ">
              Log In To Your Account
            </p>
            <p className=" text-base  text-[#5C635A] ">
              Welcome Back! Select a method to log in:
            </p>

            <div className="flex justify-between">
              <button
                //   onClick={handleGoogleSignIn}
                className="flex cursor-pointer btn items-center justify-center mt-4 text-gray-600 border rounded-lg "
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(228, 228, 228, 1), rgba(255, 255, 255, 1))",
                }}
              >
                <div className="flex gap-4 md:px-5 justify-center items-center">
                  <svg className="w-6 h-6" viewBox="0 0 40 40">
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.045 27.2142 24.3525 30 20 30C14.4775 30 10 25.5225 10 20C10 14.4775 14.4775 9.99999 20 9.99999C22.5492 9.99999 24.8683 10.9617 26.6342 12.5325L31.3483 7.81833C28.3717 5.04416 24.39 3.33333 20 3.33333C10.7958 3.33333 3.33335 10.7958 3.33335 20C3.33335 29.2042 10.7958 36.6667 20 36.6667C29.2042 36.6667 36.6667 29.2042 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#FFC107"
                    />
                    <path
                      d="M5.25497 12.2425L10.7308 16.2583C12.2125 12.59 15.8008 9.99999 20 9.99999C22.5491 9.99999 24.8683 10.9617 26.6341 12.5325L31.3483 7.81833C28.3716 5.04416 24.39 3.33333 20 3.33333C13.5983 3.33333 8.04663 6.94749 5.25497 12.2425Z"
                      fill="#FF3D00"
                    />
                    <path
                      d="M20 36.6667C24.305 36.6667 28.2167 35.0192 31.1742 32.34L26.0159 27.975C24.3425 29.2425 22.2625 30 20 30C15.665 30 11.9842 27.2359 10.5975 23.3784L5.16254 27.5659C7.92087 32.9634 13.5225 36.6667 20 36.6667Z"
                      fill="#4CAF50"
                    />
                    <path
                      d="M36.3425 16.7358H35V16.6667H20V23.3333H29.4192C28.7592 25.1975 27.56 26.805 26.0133 27.9758C26.0142 27.975 26.015 27.975 26.0158 27.9742L31.1742 32.3392C30.8092 32.6708 36.6667 28.3333 36.6667 20C36.6667 18.8825 36.5517 17.7917 36.3425 16.7358Z"
                      fill="#1976D2"
                    />
                  </svg>
                  <span className="font-bold text-center">Google</span>
                </div>
              </button>
              <button
                //   onClick={handleGoogleSignIn}
                className="flex cursor-pointer btn items-center justify-center mt-4 text-white  rounded-lg "
                style={{
                  backgroundImage:
                    "linear-gradient(to right, rgba(41, 143, 255, 1), rgba(7, 120, 245, 1))",
                }}
              >
                <div className="flex gap-4 md:px-5 justify-center items-center">
                  <FaFacebookF />
                  <span className="font-bold text-center">Facebook</span>
                </div>
              </button>
            </div>

            <div className="flex items-center justify-between mt-4">
              <span className="w-1/5 border-b  lg:w-1/4"></span>

              <div className="text-xs text-center text-gray-500 uppercase  hover:underline">
                Or Continue with Email
              </div>

              <span className="w-1/5 border-b dark:border-gray-400 lg:w-1/4"></span>
            </div>
            <form
            //   onSubmit={handleSignIn}
            >
              <div className="mt-4">
                <label className="block mb-2 text-sm font-medium text-gray-600 ">
                  Email Address
                </label>
                <input
                  name="email"
                  placeholder="Enter your email"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="email"
                />
              </div>

              <div className="mt-4">
                <div className="flex justify-between">
                  <label className="block mb-2 text-sm font-medium text-gray-600 ">
                    Password
                  </label>
                </div>

                <input
                  placeholder="Enter your password"
                  name="password"
                  className="block w-full px-4 py-2 text-gray-700 bg-white border rounded-lg    focus:border-blue-400 focus:ring-opacity-40  focus:outline-none focus:ring focus:ring-blue-300"
                  type="password"
                />
              </div>
              <div className="flex justify-between mt-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    aria-label="Remember me"
                    className="mr-1 rounded-sm "
                  />
                  <label htmlFor="remember" className="text-sm ">
                    Remember me
                  </label>
                </div>
                <a className="text-sm  underline text-[#156BCA]">
                  Forgot your password?
                </a>
              </div>
              <div className="mt-6 text-center">
                <button
                  type="submit"
                  className=" px-6 py-3 w-56 text-sm font-medium tracking-wide  capitalize transition-colors duration-300 transform bg-[#156BCA] text-[#FFFFFF] rounded-lg hover:bg-[#156ccac2] focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50"
                >
                  Sign In
                </button>
              </div>
            </form>

            <div className=" mt-4">
              <p className="text-base text-center sm:px-6 dark:text-gray-600">
                Don't have an account?
                <Link to="/register" className=" text-[#156BCA]  underline">
                  Create Account
                </Link>
              </p>
            </div>
          </div>
          <div
            className="hidden rounded-lg bg-cover bg-center md:flex justify-center items-center  md:w-1/2"
            style={{
              backgroundImage: `url(${bg1})`,
            }}
          >
            <div className="relative max-w-60 h-28 rounded-xl text-[#FFFFFFF5] flex justify-center items-center">
              <div className="absolute inset-0 bg-[#152A16] opacity-70 rounded-xl"></div>
              <div className="relative z-10 p-6 text-center text-lg">
                <span className="text-[#156bca]">Sign In</span> to view all the
                massage therapists
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
