import React from "react";
import styles from "./style.module.css";

export const PersTag = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={styles.persTag}>
      <span className="text-sm font-semibold px-2">{children}</span>
    </div>
  );
};

export const RevTag = ({ children, onClick }) => {
  return (
    <div onClick={onClick} className={styles.revTag}>
      <span className="text-sm font-semibold px-2">{children}</span>
    </div>
  );
};

export const Balloon = ({ children }) => {
  return (
    <div className={styles.balloon}>
      <div className="text-sm font-semibold px-2">{children}</div>
    </div>
  );
};
