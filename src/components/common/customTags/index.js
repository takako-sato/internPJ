import React from "react";
import { MdClose } from "react-icons/md";
export const CustomTags = ({
  isReview,
  reviewCustomTags,
  deleteHandler,
  cliced,
  personalCustomTags,
}) => {
  return (
    <>
      {/* 自分がカスタムで作成したタグ */}
      <div className="flex  w-8/12 m-auto">
        {isReview
          ? reviewCustomTags.map((res) => (
              <>
                <div className="w-6 h-6 rounded-full bg-red-220 relative left-6 top-1 flex justify-center items-center ">
                  <div
                    className="w-4 h-4 rounded-full bg-white left-6 cursor-pointer"
                    onClick={() => deleteHandler(res)}
                  >
                    <MdClose />
                  </div>
                </div>

                <div className="p-3">
                  <input
                    type="checkbox"
                    id={res}
                    className="hidden"
                    onChange={(e) => cliced(e, res)}
                  />
                  <label
                    htmlFor={res}
                    className={`
                  rounded-full
                  border-2
                  label-checked:p-sm
                  ${isReview ? `border-red-220` : `border-blue-220`}
                  p-sm
                  my-2
                cursor-pointer
                rounded-full text-center  
                 ${isReview ? `bg-red-220` : `bg-blue-220`}`}
                  >
                    {res}
                  </label>
                </div>
              </>
            ))
          : personalCustomTags.map((res) => (
              <>
                <div className="w-6 h-6 rounded-full bg-blue-220 relative left-6 top-1 flex justify-center items-center ">
                  <div
                    className="w-4 h-4 rounded-full bg-white left-6 cursor-pointer"
                    onClick={() => deleteHandler(res)}
                  >
                    <MdClose />
                  </div>
                </div>
                <div className=" p-3">
                  <input
                    type="checkbox"
                    id={res}
                    className="hidden"
                    onChange={(e) => cliced(e, res)}
                  />
                  <label
                    htmlFor={res}
                    className={`
                  rounded-full
                  border-2
                  label-checked:p-sm
                  ${isReview ? `border-red-220` : `border-blue-220`}
                  p-sm
                  my-2
                cursor-pointer
                rounded-full text-center  
                 ${isReview ? `bg-red-220` : `bg-blue-220`}`}
                  >
                    {res}
                  </label>
                </div>
              </>
            ))}
      </div>
    </>
  );
};
