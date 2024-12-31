import React from "react";
import { FaUserTie } from "react-icons/fa";
import { LuLogOut } from "react-icons/lu";
import { useNote } from "../context/Context";
import { useNavigate } from "react-router-dom";

const AccountDropdown = () => {
  const { userLoggedIn } = useNote();
  const navigate = useNavigate()
  
  const handleLogout = () => {
    console.log("logout")
    sessionStorage.clear();
    navigate("/");
  };
  
  return (
   <>
   {userLoggedIn.map((user) => (

     <div className="flex  flex-col gap-5 items-center">
      <p className="text-base ">{user.email}</p>
      <div className="bg-white p-10 rounded-full text-5xl dark:text-black">
        <FaUserTie />
      </div>
      <p className="text-3xl">hi, {user.name}</p>
      <div onClick={handleLogout} className="flex items-center gap-5 w-full rounded-md bg-gray-100 justify-center py-2 cursor-pointer dark:bg-gray-700">
        <LuLogOut />
        <p>Logout</p>
      </div>
    </div>
    ))}
   </>
  );
};

export default AccountDropdown;
