import React from "react";
import { CheckCircle } from "../circle";
import { CheckedCircle } from "../circle/checkedCircle.js";
export const CheckedList = ({
  title,
  content1,
  content2,
  content3,
  isReview,
  checkedNum,
  required,
}) => {
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
                <div key={i}>
                  {i === Number(checkedNum) ? (
                    <CheckedCircle
                      isReview={isReview}
                      content={
                        i === 0
                          ? content1
                          : i === 2
                          ? content2
                          : i === 4 && content3
                      }
                    />
                  ) : (
                    <CheckCircle
                      checkedNum={checkedNum}
                      type={i}
                      isReview={isReview}
                      content={
                        i === 0
                          ? content1
                          : i === 2
                          ? content2
                          : i === 4 && content3
                      }
                    />
                  )}
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
