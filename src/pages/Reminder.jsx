import React from 'react'
import { FaBell } from "react-icons/fa";

const Reminder = () => {
  return (
    <>
    <div className="flex items-center justify-center w-full h-[80vh] ">
         <div className=" flex flex-col gap-10 items-center">
          
           <div className="text-[120px] text-gray-500 ">
             <FaBell />
           </div>
           <p className="text-[30px] text-gray-500"> No notes in  Reminder</p>{" "}
         </div>
         </div></>
  )
}

export default Reminder
