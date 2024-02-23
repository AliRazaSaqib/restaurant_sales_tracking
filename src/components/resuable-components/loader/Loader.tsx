import styles from "./loader.module.css";

export const Loader = () => {
  return (
    <div className={styles.container}>
      <div>
        <span className={styles.loader}></span>
        <span className={styles.loading_label}>Data loading...</span>
      </div>
    </div>
  );
};
