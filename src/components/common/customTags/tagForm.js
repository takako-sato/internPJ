import React from "react";
import { Input } from "../input";
import { Button } from "../button";
export const TagForm = ({
  isReview,
  reviewCustomTag,
  personalCustomTag,
  setReviewCustomTag,
  setPersonalCustomTag,
  isdesabled,
  submitHandler,
}) => {
  return (
    <div className="text-center m-auto justify-center pr-14 pt-4 mt-10 flex">
      <div className="w-5/12">
        <Input
          value={isReview ? reviewCustomTag : personalCustomTag}
          onChange={(e) => {
            isReview
              ? setReviewCustomTag(e.target.value)
              : setPersonalCustomTag(e.target.value);
          }}
        />
      </div>
      <div>
        <Button
          isdesabled={isdesabled}
          styles={`mr-4 ml-4  border-2 
            ${
              isReview
                ? isdesabled
                  ? `border-red-220 text-white bg-red-220`
                  : `border-red-220 text-red-220`
                : isdesabled
                ? `border-blue-220 text-white bg-blue-500 `
                : `border-blue-500 text-blue-500`
            }`}
          onClick={submitHandler}
        >
          タグを追加
        </Button>
      </div>
    </div>
  );
};
