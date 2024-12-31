import React from 'react'
import { IoMdArchive } from "react-icons/io";
import { useNote } from "../context/Context";
import Cards from "../components/Cards";

const Archive = () => {
  const { notes, userSession } = useNote();
  const note = notes.filter((card) => card.email === userSession);
  const archiveNote = note.filter((card) => card.type === "archive");

  return (
<>
      {archiveNote.length === 0 ? (

        <div className="flex items-center justify-center w-full h-[80vh] ">
        <div className=" flex flex-col gap-10 items-center">
         
          <div className="text-[120px] text-gray-500 ">
          <IoMdArchive />
          </div>
          <p className="text-[30px] text-gray-500">  No notes in  Archive</p>{" "}
        </div>
        </div>
      ) : (
        <div className="w-full flex flex-wrap gap-3 items-start p-10">
          {archiveNote.map((trash) => (
            <Cards card={trash} />
          ))}
        </div>
      )}
    </>

  )
}

export default Archive
