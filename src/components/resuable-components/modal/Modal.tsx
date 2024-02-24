import { FC } from "react";
import styles from "./modal.module.css";
import { CloseButton } from "../buttons/CloseButton";
import commonStyles from "../../../index.module.css";

interface iModal {
  isShow: boolean;
  setModal: (isShow: boolean) => void;
  name: string;
  cost: number | string;
  price: number | string;
  options: string | number | undefined;
  category: string;
  stock: string | number;
}

export const Modal: FC<iModal> = ({
  isShow,
  setModal,
  name,
  options,
  price,
  cost,
  category,
  stock,
}) => {
  return (
    <>
      {isShow && (
        <div className={`${styles.modal} ${isShow && styles.show}`}>
          <div className={styles.modal_wrap}>
            <div>
              <div className={styles.item_container}>
                <div className={styles.item}>
                  <span className={styles.item_span}>Name</span>
                  <span className={styles.item_span}>{name}</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.item_span}>Option</span>
                  <span className={styles.item_span}>{options}</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.item_span}>Price</span>
                  <span className={styles.item_span}>${price}</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.item_span}>Cost</span>
                  <span className={styles.item_span}>${cost}</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.item_span}>Category</span>
                  <span className={styles.item_span}>{category}</span>
                </div>
                <div className={styles.item}>
                  <span className={styles.item_span}>Stock</span>
                  <span className={styles.item_span}>{stock}</span>
                </div>
              </div>
            </div>

            <button
              className={`${commonStyles.button} ${styles.button}`}
              onClick={() => setModal(false)}>
              Close modal
            </button>
          </div>

          <CloseButton
            label="X"
            addClass={`${commonStyles.cross_icon} ${styles.close_btn}`}
            onClick={() => setModal(false)}
          />
        </div>
      )}
    </>
  );
};
