import React, { forwardRef } from "react";

const Input = ({ type = "text", className = "", ...props }, ref) => {
  return (
    <input
      ref={ref}
      type={type}
      className={`p-2 border-2 border-gray-200 outline-none rounded-md font-semibold ${className}`}
      {...props}
    />
  );
};

export default forwardRef(Input);
