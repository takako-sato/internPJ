import React from "react";

export const Button = ({ onClick, children, styles, isdesabled }) => {
  return (
    <button
      onClick={onClick}
      desabled={isdesabled}
      className={`hover:bg-opacity-70 text-white font-bold py-2 px-4 rounded ${styles}`}
    >
      {children}
    </button>
  );
};
