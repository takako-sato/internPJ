import React from "react";
import { PersTag, RevTag, Balloon } from "../tag";
import styles from "./style.module.css";
export const Review = ({ previewTags, name, reviewTags }) => {
  return (
    <div className={styles.comment}>
      <div className="flex">
        <div className="mr-3">
          <img src="icon.png" width="60px" />
        </div>
        <p className="my-2">
          {previewTags && previewTags?.map((res) => <PersTag>{res}</PersTag>)}
        </p>
        <span className="font-bold text-gray-600 m-5">{name}</span>
      </div>
      <Balloon>
        <div>
          {reviewTags && reviewTags?.map((res) => <RevTag>{res}</RevTag>)}
        </div>
      </Balloon>
    </div>
  );
};
