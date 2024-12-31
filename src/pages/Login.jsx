import React from "react";
import Input from "../components/Input";
import logo from "../assets/googlelogo.png";
import Button from "../components/Button";
import { NavLink, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNote } from "../context/Context";
import { IoMdMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";


const Login = () => {
  const { userLogin, setIsDarkMode, isDarkMode } = useNote();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const navigate = useNavigate();
  const handleSignup = () => {
    navigate("signup");
  };

  const handleLogin = (data) => {
    userLogin(data);
  };

  return (
    <div className="relative w-full h-screen  flex items-center justify-center md:bg-blue-100 md:dark:bg-gray-700 dark:bg-gray-900">
      <div
        onClick={(prev) => setIsDarkMode((prev) => !isDarkMode)}
        className={`absolute top-5 right-5 text-sm py-2 px-2 rounded-full cursor-pointer border-2 
         ${isDarkMode === true ? "border-white" : "border-black"}
         ${isDarkMode === true ? "text-white" : "text-black"}
         flex items-center justify-center gap-2 
          `}
      >
        {/* <p>{isDarkMode === true ? "light mode" : "dark mode"}</p> */}
        <div>{isDarkMode === true ? <IoSunnyOutline /> : <IoMdMoon />}</div>
      </div>
      <div className="bg-white  p-12 rounded-lg max-w-[1024px] w-full flex flex-col md:items-start items-center gap-5 dark:bg-gray-900 dark:text-white">
        <div className="w-16">
          <img src={logo} alt="" />
        </div>
        <div className="flex  md:flex-row flex-col md:items-start items-center  gap-10 w-full">
          <div className="md:w-[50%] w-full flex flex-col md:items-start items-center">
            <p className="text-4xl font-medium md:pb-3 pb-1 text-gray-800 dark:text-white">
              Sign in
            </p>
            <p>Use your Google Account</p>
          </div>
          <form
            onSubmit={handleSubmit(handleLogin)}
            className=" flex flex-col gap-9 md:w-[50%] w-full"
          >
            <div>
              <div className="flex flex-col gap-5">
                <div className="relative">
                  <Input
                    type="email"
                    autoFocus
                    placeholder="Enter your email"
                    className="w-full p-3 focus:border-blue-800 bg-transparent "
                    {...register("email", { required: true })}
                    aria-invalid={errors.email ? "true" : "false"}
                  />
                  {errors.email?.type === "required" && (
                    <p
                      role="alert"
                      className="text-red-800 text-sm font-semibold "
                    >
                      {" "}
                      email is required
                    </p>
                  )}
                  <div className="absolute top-[-10px] right-[20px] text-blue-800 font-semibold border-1 text-[12px] border-blue-900 py-[2px] px-1 rounded-md bg-white dark:bg-gray-900 dark:text-white">
                    email
                  </div>
                </div>
                <div className="relative">
                  <Input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full p-3 focus:border-blue-800 bg-transparent"
                    {...register("password", { required: true })}
                    aria-invalid={errors.password ? "true" : "false"}
                  />
                  {errors.email?.type === "required" && (
                    <p
                      role="alert"
                      className="text-red-800 text-sm font-semibold "
                    >
                      {" "}
                      password is required
                    </p>
                  )}
                  <div className="absolute top-[-10px] right-[20px] text-blue-800 font-semibold border-1 text-[12px] border-blue-900 py-[2px] px-1 rounded-md bg-white dark:bg-gray-900 dark:text-white">
                    Password
                  </div>
                </div>
              </div>
              <div>
                <p className="text-blue-800 pt-1 font-semibold md:text-[14px] text-[12px] cursor-pointer text-right">
                  Forget email?
                </p>
              </div>
            </div>
            <div>
              <p className="text-sm font-semibold text-center md:text-start">
                Not your computer? Use Guest mode to sign in privately.{" "}
                <span className="text-blue-800 cursor-pointer">
                  Learn more about using Guest mode
                </span>
              </p>
            </div>
            <div className="flex md:justify-end justify-center md:flex-row flex-col gap-3 items-center">
              <p
                onClick={handleSignup}
                className="bg-white hover:bg-blue-800 hover:text-white duration-500 dark:bg-gray-900 cursor-pointer rounded-lg px-4 py-2"
              >
                Create account
              </p>

              <Button
                type="submit"
                className="text-white md:w-[100px] w-full  hover:bg-blue-600 duration-500 cursor-pointer "
              >
                Log in
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
