import React, { useState } from "react";
import { AiOutlineCheck } from "react-icons/ai";
export const Circle = ({ number, activeStep }) => {
  return (
    <>
      <div
        className={`w-10 h-10 ${number - 1 === activeStep && `bg-purple-main`}
        ${number === activeStep ? `bg-purple-main` : `bg-gray-500`}
        ${activeStep >= 2 && `bg-purple-main`}
        rounded-full table-cell align-middle`}
      >
        <div className="text-white text-center  align-bottom">{number}</div>
      </div>
    </>
  );
};

export const CheckCircle = ({
  type,
  isReview,
  content,
  clickedType,
  checkedNum,
}) => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div>
      <div className="h-7 w-12">
        <div className="text-gray-submain">{content}</div>
      </div>
      {(isClicked && type === clickedType) || checkedNum === type ? (
        <button
          className={`w-8 h-8
          cursor-pointer
          border-4 
          ${isReview ? `bg-red-220` : `bg-blue-220`}
          rounded-full table-cell align-middle`}
          onClick={() => setIsClicked(false)}
        >
          <div className="text-white text-center  align-middle ">
            <AiOutlineCheck size={24} />
          </div>
        </button>
      ) : (
        <button
          className={`w-8 h-8
          cursor-pointer
          border-4 
          ${isReview ? `border-red-220` : `border-blue-220`}
          rounded-full table-cell align-middle`}
          onClick={() => setIsClicked(true)}
        ></button>
      )}
    </div>
  );
};
