import React, { useState } from "react";
import Notes from "../components/Notes";
import Cards from "../components/Cards";
import { useNote } from "../context/Context";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Reminder from "./Reminder";
import Edit from "./Edit";
import Archive from "./Archive";
import Trash from "./Trash";
import { FaPlus } from "react-icons/fa6";

const Home = () => {
  const { notes, userSession, userLoggedIn, listView, setShowSidebar } =
    useNote();
  const [selectTab, setSelectTab] = useState("Home");
  const userdata = notes.filter((card) => card.email === userSession);
  const homeData = userdata.filter((card) => card.type === "home");
  console.log(homeData);

  const [showNote, setShowNote] = useState(false);

  const [takeNote, setTakeNote] = useState(false);
  // const [inputValue, setInputValue] = useState('there are ');

  // const handleChange = (e) => {
  //   setInputValue(e.target.value);
  // };

  return (
    <>
      {userSession && (
        <div className="dark:bg-[#202124] dark:text-white h-screen">
          <Navbar />

          <div className="relative flex">
            <Sidebar setSelectTab={setSelectTab} selectTab={selectTab} />
            <div
              onClick={() => setShowSidebar(false)}
              className="relative flex w-full h-screen"
            >
              {selectTab === "Home" && (
                <div className="md:w-full md:p-[50px] p-2  flex md:flex-col flex-col items-center md:gap-11 gap-2  scroll-smooth overflow-scroll h-screen">
                  {takeNote === true && (
                    <div
                      onClick={() => setTakeNote(false)}
                      className={`md:w-[600px] w-full   md:static hidden md:block  border shadow-md shadow-gray-600 px-4 py-3  rounded-lg cursor-pointe`}
                    >
                      <p className="text-gray-500 ">Take a note...</p>
                    </div>
                  )}

                  {takeNote === false && (
                    <Notes showNote={showNote} setShowNote={setShowNote} />
                  )}
                  <div
                    className={`md:w-full flex  w-full  flex-wrap  ${
                      listView === true
                        ? "justify-start items-center flex-col  "
                        : "flex-wrap items-start justify-between"
                    } gap-3 pb-20`}
                  >
                    {homeData.map((card) => (
                      <Cards card={card} />
                    ))}
                  </div>
                  <div className="md:hidden">
                    <div
                      onClick={() => setShowNote(true)}
                      className="fixed right-6 bottom-6 bg-gray-500 p-4 rounded-lg cursor-pointer"
                    >
                      <FaPlus className="text-white" />
                    </div>
                  </div>
                </div>
              )}
              {selectTab === "Reminder" && <Reminder />}
              {selectTab === "Edit" && <Edit />}
              {selectTab === "Archive" && <Archive />}
              {selectTab === "Trash" && <Trash />}
            </div>
          </div>
        </div>
      )}
      ;
    </>
  );
};

export default Home;
