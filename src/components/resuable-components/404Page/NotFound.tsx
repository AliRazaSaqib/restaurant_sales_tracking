import { FC } from "react";
import emptyState from "../../../assets/images/record_not_found.png";
import styles from "./notFound.module.css";

type RecNotFound = {
  label: string;
};

export const NotFound: FC<RecNotFound> = ({ label }) => {
  return (
    <div className={styles.not_found}>
      <img src={emptyState} alt="not found" />
      <label>{label}</label>
    </div>
  );
};
