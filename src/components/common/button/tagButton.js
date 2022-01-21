import React from "react";

export const TagButton = ({ name, isReview, cliced }) => {
  return (
    <>
      <input
        type="checkbox"
        id={name}
        className="hidden "
        onChange={(e) => cliced && cliced(e, name)}
      />
      <button
        className={`
              text-gray-main
              ${cliced ? `border-2` : isReview ? `bg-red-220` : `bg-blue-220`}
              md:w-full
              text-gray-main
              // lg:label-checked
              ${isReview ? `border-red-220` : `border-blue-220`}
     
              py-1
              px-1
              my-2
              lg:cursor-pointer
              rounded-full 
              text-center  
             ${
               isReview
                 ? `label-checked:bg-red-220`
                 : `label-checked:bg-blue-220`
             }`}
      >
        <label
          htmlFor={name}
          className={`
                rounded-full
                label-checked:p-sm
                p-sm
                cursor-pointer
                py-2
                px-4
                text-center  
                 ${
                   isReview
                     ? `label-checked:bg-red-220`
                     : `label-checked:bg-blue-220`
                 }`}
        >
          {name}
        </label>
      </button>
    </>
  );
};

export const TagReviewButton = ({ name }) => {
  return (
    <>
      <input type="checkbox" id={name} className="hidden " />
      <button
        className={`
              rounded-full
              bg-red-220
              md:w-full
              text-gray-main

              border-red-220
              py-2
              px-4
              lg:my-2
              lg:cursor-pointer
              lg:rounded-full text-center  
             }`}
      >
        <label htmlFor={name}>{name}</label>
      </button>
    </>
  );
};
