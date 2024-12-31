import React from "react";
import { useNote } from "../context/Context";

const Container = ({ children }) => {
  const {isDarkMode} = useNote()
  return (
    <div className={`w-full  h-screen overflow-hidden relative ${isDarkMode === true ? 'dark' : ''}`}>
      {children}
    </div>
  );
};

export default Container;
