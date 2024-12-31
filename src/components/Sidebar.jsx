import React from "react";
import { NavLink } from "react-router-dom";
import { FaRegLightbulb } from "react-icons/fa";
import { FaRegBell } from "react-icons/fa";
import { CiEdit } from "react-icons/ci";
import { IoArchiveOutline } from "react-icons/io5";
import { FaRegTrashAlt } from "react-icons/fa";
import { useNote } from "../context/Context";
import home from '../assets/home.png'
import bell from '../assets/bell.png'
import trash from '../assets/trash.png'
import archive from '../assets/archive.png'
import edit from '../assets/edit.png'

const Sidebar = ({ setSelectTab, selectTab }) => {
  const { showSidebar, setShowSidebar } = useNote();


  const handleSide = (value) => {
    setSelectTab(value)
    setShowSidebar(false)
  }
  return (

    <div className={` py-2 md:pr-0 h-screen   flex flex-col gap-2 max-w-[300px] border-2 border-r-gray-200 rounded-2xl md:rounded-none md:border-none md:static fixed top-0 bottom-0  z-10 bg-white md:dark:bg-transparent dark:bg-gray-900`}>
      <div className={`  ${showSidebar === false ? 'md:block hidden  md:w-[260px]' : 'md:block  block'}`}>

        {/* <div
          className={`block md:hidden p-2 text-[18px] text-center pb-5 pl-4 py-3  rounded-tr-full rounded-br-full cursor-pointer
        } `}
        >
          <div className="md:block ">
            <p
              className={`w-[200px] ${showSidebar === true ? "md:hidden " : "md:block "
                } font-semibold text-blue-700 text-[16px]`}
            >
              Google Keeps
            </p>
          </div>
        </div> */}
        <div
          onClick={() => handleSide("Home")}
          className={` w-full flex items-center gap-5 pl-4 py-3  rounded-tr-full font-semibold rounded-br-full cursor-pointer ${selectTab === "Home" && "text-[#41a5ee] bg-gray-300 dark:bg-gray-600"
            } `}
        >
          <div className="">
            <img src={home} className="w-6" alt="" />
          </div>
          <div className="md:block md:w-0 w-[250px] ">
            <p
              className={`w-full ${showSidebar === true ? "md:hidden" : "md:block  "
                } text-[16px]`}
            >
              Home
            </p>
          </div>
        </div>
        <div
          onClick={() => handleSide("Reminder")}
          className={`  flex items-center gap-5 pl-4 py-3  rounded-tr-full font-semibold rounded-br-full cursor-pointer ${selectTab === "Reminder" && "text-[#41a5ee] bg-gray-300 dark:bg-gray-600"
            } `}
        >
          <div className="">
            <img src={bell} className="w-6" alt="" />
          </div>
          <div className="md:block ">
            <p
              className={`w-full ${showSidebar === true ? "md:hidden" : "md:block "
                } text-[16px]`}
            >
              Reminders
            </p>
          </div>
        </div>
        <div
          onClick={() => handleSide("Edit")}
          className={`  flex items-center gap-5 pl-4 py-3  rounded-tr-full font-semibold rounded-br-full cursor-pointer ${selectTab === "Edit" && "text-[#41a5ee] bg-gray-300 dark:bg-gray-600"
            } `}
        >
          <div className="">
            <img src={edit} className="w-6" alt="" />
          </div>
          <div className="md:block ">
            <p
              className={`w-full ${showSidebar === true ? "md:hidden" : "md:block "
                } text-[16px]`}
            >
              Edit Labels
            </p>
          </div>
        </div>
        <div
          onClick={() => handleSide("Archive")}
          className={`  flex items-center gap-5 pl-4 py-3  rounded-tr-full font-semibold rounded-br-full cursor-pointer ${selectTab === "Archive" && "text-[#41a5ee] bg-gray-300 dark:bg-gray-600"
            } `}
        >
          <div className="">
            <img src={archive} className="w-6" alt="" />
          </div>
          <div className="md:block ">
            <p
              className={`w-full ${showSidebar === true ? "md:hidden" : "md:block "
                } text-[16px]`}
            >
              Archive
            </p>
          </div>
        </div>
        <div
          onClick={() => handleSide("Trash")}
          className={`  flex items-center gap-5 pl-4 py-3  rounded-tr-full font-semibold rounded-br-full cursor-pointer ${selectTab === "Trash" && "text-[#41a5ee] bg-gray-300 dark:bg-gray-600"
            } `}
        >
          <div className="">
            <img src={trash} className="w-6" alt="" />
          </div>
          <div className="md:block ">
            <p
              className={`w-full ${showSidebar === true ? "md:hidden" : "md:block "
                } text-[16px]`}
            >
              Trash
            </p>
          </div>
        </div>




      </div>
    </div>

  );
};

export default Sidebar;
