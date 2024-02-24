import { FC } from "react";
import styles from "./modal.module.css";
import { CloseButton } from "../buttons/CloseButton";
import commonStyles from "../../../index.module.css";

interface iModal {
  isShow: boolean;
  setConfermationModal: (isShow: boolean) => void;
  label: string;
  firstButton: string;
  secondButton: string;
  onDeleteConfirmed?: () => void;
}

export const ConfermationModal: FC<iModal> = ({
  isShow,
  setConfermationModal,
  label,
  firstButton,
  secondButton,
  onDeleteConfirmed,
}) => {
  return (
    <>
      {isShow && (
        <div className={`${styles.modal} ${isShow && styles.show}`}>
          <div className={styles.modal_wrap}>
            <p>{label}</p>

            <div className={styles.delete_btn_group}>
              <button
                className={`${commonStyles.button} ${styles.button}`}
                onClick={() => setConfermationModal(false)}>
                {firstButton}
              </button>
              <button
                className={`${commonStyles.button} ${styles.button}`}
                onClick={onDeleteConfirmed}>
                {secondButton}
              </button>
            </div>
          </div>

          <CloseButton
            label="X"
            addClass={`${commonStyles.cross_icon} ${styles.close_btn}`}
            onClick={() => setConfermationModal(false)}
          />
        </div>
      )}
    </>
  );
};
