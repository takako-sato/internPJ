import React from "react";
import { AiOutlineCheck } from "react-icons/ai";
export const CheckedCircle = ({ isReview, content }) => {
  return (
    <div>
      <div className="h-7 w-12">
        <div className="text-gray-submain">{content}</div>
      </div>
      <button
        className={`w-8 h-8
      cursor-pointer
      border-4 
      ${isReview ? `bg-red-220` : `bg-blue-220`}
      rounded-full table-cell align-middle`}
      >
        <div className="text-white text-center  align-middle ">
          <AiOutlineCheck size={24} />
        </div>
      </button>
    </div>
  );
};
