import React from "react";

export const Input = ({ onChange, value }) => {
  return (
    <div>
      <input
        class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        type="text"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};
