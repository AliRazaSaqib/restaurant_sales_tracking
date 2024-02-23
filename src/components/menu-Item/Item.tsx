import { CloseButton } from "../resuable-components/buttons/CloseButton";
import styles from "./item.module.css";
import commonStyles from "../../index.module.css";
import { FC } from "react";
import { MenuItem } from "../../types/CommonTypes";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/storeHooks";
import { deleteDataThunk, getDataThunk } from "../../store/items/itemThunk";

interface iMenuList {
  item: MenuItem;
}

const Item: FC<iMenuList> = ({ item }) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { id, cost, name, category, stock, price, options } = item ?? {};

  const handleDeleteItem = (id: string) => {
    dispatch(deleteDataThunk(id));
    dispatch(getDataThunk());
  };

  const updateRoute = (id: string) => {
    navigate(`/update-menu?id=${id}`);
  };

  return (
    <>
      <div className={styles.card}>
        <CloseButton
          label="X"
          addClass={`${commonStyles.cross_icon} ${styles.close_button}`}
          onClick={() => handleDeleteItem(String(id))}
        />

        <div className={styles.card_content}>
          <div>
            <div className={styles.item_container}>
              <div className={styles.item}>
                <span className={styles.item_span}>Category</span>
                <span className={styles.item_span}>{category}</span>
              </div>
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
                <span className={styles.item_span}>{price}</span>
              </div>

              <div className={styles.item}>
                <span className={styles.item_span}>Cost</span>
                <span className={styles.item_span}>{cost}</span>
              </div>
              <div className={styles.item}>
                <span className={styles.item_span}>Stock</span>
                <span className={styles.item_span}>{stock}</span>
              </div>
            </div>
          </div>

          <button
            className={styles.edit_btn}
            onClick={() => updateRoute(String(id))}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="#000000">
              <path
                d="M 6.0097656 2 C 4.9143111 2 4.0097656 2.9025988 4.0097656 3.9980469 L 4 22 L 12 19 L 20 22 L 20 20.556641 L 20 4 C 20 2.9069372 19.093063 2 18 2 L 6.0097656 2 z M 6.0097656 4 L 18 4 L 18 19.113281 L 12 16.863281 L 6.0019531 19.113281 L 6.0097656 4 z"
                fill="currentColor"
              />
            </svg>
            Edit
          </button>
        </div>
      </div>
    </>
  );
};

export default Item;
