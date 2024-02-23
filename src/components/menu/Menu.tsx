import Item from "../menu-Item/Item";
import commonStyles from "../../index.module.css";
import styles from "./menu.module.css";
import { MenuItem } from "../../types/CommonTypes";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/storeHooks";

export const Menu = () => {
  const items = useAppSelector((state) => state.items.items);

  return (
    <div className={styles.menu_container}>
      <Link to={"/create-menu"} className={`${styles.button_link}`}>
        <button className={commonStyles.button}>Add New Item</button>
      </Link>

      <h2>Menu Items List</h2>
      <div className={styles.card}>
        {items &&
          items.map((item: MenuItem, key: number) => (
            <div key={item.id} className={styles.card_container}>
              <Item item={item} />
            </div>
          ))}
      </div>
    </div>
  );
};
