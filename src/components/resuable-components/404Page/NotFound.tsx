import { FC } from "react";
import emptyState from "../../../assets/images/record_not_found.png";
import styles from "./notFound.module.css";

interface iRecNotFound {
  label: string;
}

export const NotFound: FC<iRecNotFound> = ({ label }) => {
  return (
    <div className={styles.not_found}>
      <img src={emptyState} alt="not found" />
      <label>{label}</label>
    </div>
  );
};
