import React, { useEffect, useId, useRef, useState } from "react";
import { FaRegBell } from "react-icons/fa";
import { FaUserPlus } from "react-icons/fa6";
import { IoColorPaletteOutline } from "react-icons/io5";
import { IoImageOutline } from "react-icons/io5";
import { MdOutlineArchive } from "react-icons/md";
import { IoMdMore } from "react-icons/io";
import { MdUndo } from "react-icons/md";
import { IoMdRedo } from "react-icons/io";
import { TiPinOutline } from "react-icons/ti";
import { Form, useForm } from "react-hook-form";
import { useNote } from "../context/Context";

const Notes = ({showNote, setShowNote}) => {
  const titleRef = useRef();
  const textareaRef = useRef();

  const { setNotes, addNote, color, userLoggedIn } = useNote();
  const { email } = userLoggedIn[0];
  const handleSubmit = (e) => {
    e.preventDefault();
    const title = titleRef.current.value;
    const textarea = textareaRef.current.value;
    const id = new Date();
    addNote(title, textarea, id.toLocaleTimeString(), color, email);
    titleRef.current.value = "";
    textareaRef.current.value = "";
  };

  const handleTextareaResize = (event) => {
    event.target.style.height = "auto";
    event.target.style.height = event.target.scrollHeight + "px";
  };

  return (
    <form onSubmit={handleSubmit} className={`md:block ${showNote ? 'block' : 'hidden'} w-full `}>
      {/* <div className="md:w-[500px]   border border-gray-400 px-4 py-3 flex flex-col rounded-lg gap-2 "> */}
      <div className="md:max-w-[600px] w-full md:min-w-[200px]  md:static fixed z-20 bg-white top-0 left-0 right-0 bottom-0  border shadow-md shadow-gray-600 px-4 py-3 flex flex-col justify-between rounded-lg gap-2   dark:bg-gray-900 md:dark:bg-transparent">
        <div className="flex flex-col ">

        <input
          type="text"
          className="w-full md:text-sm text-lg  pb-2 outline-none bg-transparent placeholder:text-gray-500 placeholder:text-[16px] placeholder:font-[500] mb-2"
          placeholder="Title"
          ref={titleRef}
          />
        <textarea
          onInput={handleTextareaResize}
          className="w-full md:h-fit h-[500px]  resize-none md:text-sm text-base  outline-none bg-transparent placeholder:text-gray-500 placeholder:text-[14px] placeholder:font-[500] "
          placeholder="Take a note ..."
          ref={textareaRef}
          ></textarea>
          </div>

        <div className="flex items-center md:flex-row flex-col justify-between w-full">
          <div className="hidden md:block">

          <div className="flex items-center justify-between gap-4 text-sm ">
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <FaRegBell />
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <FaUserPlus />
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <IoColorPaletteOutline />
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <IoImageOutline />
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <MdOutlineArchive />
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <IoMdMore />
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <MdUndo />
            </div>
            <div className="hover:bg-gray-300 rounded-full p-1 cursor-pointer">
              <IoMdRedo />
            </div>
          </div>
          </div>

          <div className="w-full text-right"> 
            <button
              type="submit"
              className="bg-blue-600 md:w-fit w-full   hover:bg-blue-600 md:text-[10px] text-white md:py-1 md:px-2 p-4 text-base  rounded-md cursor-pointer"
              onClick={() => setShowNote(false)}
            >
              Add Note
            </button>
            <div
              className="border border-black text-center  md:hidden md:w-fit w-full   hover:bg-blue-600 md:text-[10px] mt-2 md:py-1 md:px-2 p-4 text-base  rounded-md cursor-pointer"
              onClick={() => setShowNote(false)}
            >
              Cancel
            </div>
          </div>
          {/* <TiPinOutline /> */}
        </div>
      </div>
    </form>
  );
};

export default Notes;
