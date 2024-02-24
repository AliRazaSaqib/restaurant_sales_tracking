import { CloseButton } from "../resuable-components/buttons/CloseButton";
import styles from "./item.module.css";
import commonStyles from "../../index.module.css";
import { FC, useState } from "react";
import { MenuItem } from "../../types/CommonTypes";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "../../hooks/storeHooks";
import { deleteDataThunk, getDataThunk } from "../../store/items/itemThunk";
import { Modal } from "../resuable-components/modal/Modal";
import { ConfermationModal } from "../resuable-components/modal/ConfermationModal";

interface iMenuList {
  item: MenuItem;
}

const Item: FC<iMenuList> = ({ item }) => {
  const [modal, setModal] = useState(false);
  const [confermationModal, setConfermationModal] = useState(false);

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
          onClick={() => setConfermationModal(true)}
        />

        <div className={styles.card_content}>
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
            </div>
          </div>

          <div className={styles.button_group}>
            <button
              className={`${styles.edit_btn} ${commonStyles.button}`}
              onClick={() => updateRoute(String(id))}>
              Edit
            </button>
            <button
              className={`${styles.edit_btn} ${commonStyles.button}`}
              onClick={() => setModal(true)}>
              View
            </button>
          </div>
        </div>

        {modal && (
          <Modal
            isShow={modal}
            setModal={setModal}
            name={name}
            options={options}
            price={price}
            cost={cost}
            category={category}
            stock={stock}
          />
        )}

        {confermationModal && (
          <ConfermationModal
            label="Are you sure you want to delete this item?"
            firstButton="No"
            secondButton="Yes"
            isShow={confermationModal}
            setConfermationModal={setConfermationModal}
            onDeleteConfirmed={() => handleDeleteItem(String(id))}
          />
        )}
      </div>
    </>
  );
};

export default Item;
