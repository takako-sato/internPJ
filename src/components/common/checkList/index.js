import React, { useState } from "react";
import { CheckCircle } from "../circle";

export const CheckList = ({
  title,
  content1,
  content2,
  content3,
  isReview,
  required,
  count,
  checkedNum,
}) => {
  const [clickedType, setClickedType] = useState();

  return (
    <>
      <div className="flex pt-8 justify-center m-auto w-full gap-1 items-end ">
        <div className="text-gray-secoundary w-20">
          {title}
          <span className="text-purple-secoundary pl-1">{required && `*`}</span>
        </div>
        <div className="flex">
          {[...Array(5)].map((t, i) => {
            return (
              <>
                <div
                  key={i}
                  onClick={() => {
                    checkedNum ? setClickedType(checkedNum) : setClickedType(i);
                    isReview
                      ? localStorage.setItem(`review${count}`, i)
                      : localStorage.setItem(`${count}`, i);
                  }}
                >
                  <CheckCircle
                    checkedNum={checkedNum}
                    clickedType={clickedType}
                    type={i}
                    count={count}
                    isReview={isReview}
                    content={
                      i === 0
                        ? content1
                        : i === 2
                        ? content2
                        : i === 4 && content3
                    }
                  />
                </div>
                {i !== 4 && (
                  <>
                    <div className="border-r transform  mt-8  rotate-90 "></div>
                    <div className="border-r transform  mt-8  rotate-90"></div>
                    <div className="border-r transform  mt-8  rotate-90 mr-4"></div>
                  </>
                )}
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};
