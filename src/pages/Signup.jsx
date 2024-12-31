import React, { useState } from "react";
import Input from "../components/Input";
import logo from "../assets/googlelogo.png";
import Button from "../components/Button";
import { useForm } from "react-hook-form";
import { useNote } from "../context/Context";
import { NavLink, useNavigate } from "react-router-dom";
import { IoMdMoon } from "react-icons/io";
import { IoSunnyOutline } from "react-icons/io5";

const Signup = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { addUser, setIsDarkMode, isDarkMode } = useNote();
  const navigate = useNavigate();
  const [error, setError] = useState(false);
  const handleSignin = () => {
    navigate("/");
  };
  const signup = (data) => {
    if (data.name === "") {
      setError(false);
    } else {
      addUser(data);
    }
  };
  return (
    <div className="relative w-full h-screen flex items-center justify-center md:bg-blue-100 md:dark:bg-gray-700 dark:bg-gray-900">
      <div
        onClick={(prev) => setIsDarkMode((prev) => !isDarkMode)}
        className={`absolute top-5 right-5 text-sm py-2 px-2 rounded-full cursor-pointer border 
         ${isDarkMode === true ? "border-white" : "border-black"}
         ${isDarkMode === true ? "text-white" : "text-black"}
         flex items-center justify-center gap-2 
          `}
      >
        {/* <p>{isDarkMode === true ? 'light mode' : 'dark mode'}</p> */}
        <div>{isDarkMode === true ? <IoSunnyOutline /> : <IoMdMoon />}</div>
      </div>

      <div className="bg-white  p-12 rounded-lg max-w-[1024px] w-full flex flex-col md:items-start items-center gap-5 dark:bg-gray-900 dark:text-white">
        <div className="w-16">
          <img src={logo} alt="" />
        </div>
        <div className="flex md:flex-row flex-col md:items-start items-center  gap-10 w-full ">
          <div className="md:w-[50%] w-full flex flex-col md:items-start items-center">
            <p className="text-3xl md:text-4xl font-medium md:pb-3 pb-1 text-gray-800 dark:text-white">
              Create an account
            </p>
            <p>Use your Google Account</p>
          </div>
          <form
            onSubmit={handleSubmit(signup)}
            className=" flex flex-col gap-9 md:w-[50%] w-full"
          >
            <div>
              <div className="flex flex-col gap-4">
                <div className="relative">
                  <Input
                    autoFocus
                    placeholder="Enter your full name"
                    className={`w-full p-3 focus:border-blue-800 bg-transparent `}
                    {...register("name", { required: true })}
                    aria-invalid={errors.name ? "true" : "false"}
                  />
                  {errors.name?.type === "required" && (
                    <p
                      role="alert"
                      className="text-red-800 text-sm font-semibold "
                    >
                      {" "}
                      name is required
                    </p>
                  )}

                  <div className="absolute top-[-10px] right-[20px] text-blue-800 font-semibold border-1 text-[12px] border-blue-900 py-[2px] px-1 rounded-md bg-white dark:bg-gray-900 dark:text-white">
                    Name
                  </div>
                </div>
                <div className="relative">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 focus:border-blue-800 bg-transparent"
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
                    Email
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
                  {errors.password?.type === "required" && (
                    <p
                      role="alert"
                      className="text-red-800 text-sm font-semibold"
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
            </div>

            <div className="flex md:flex-row flex-col justify-end gap-3">
              <Button
                onClick={handleSignin}
                className="text-black hover:bg-blue-600 bg-white duration-500 px-4 dark:bg-transparent dark:text-white dark:hover:bg-blue-600"
              >
                Sign in
              </Button>
              <Button
                type="submit"
                className="text-white hover:bg-blue-600 duration-500 px-4"
              >
                Create account
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
