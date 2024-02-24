import { useState } from "react";
import Item from "../menu-Item/Item";
import commonStyles from "../../index.module.css";
import styles from "./menu.module.css";
import { MenuItem } from "../../types/CommonTypes";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../hooks/storeHooks";
import { Header } from "../resuable-components/header/Header";
import SearchBar from "../resuable-components/Search-bar/SearchBar";

export const Menu = () => {
  const items = useAppSelector((state) => state.items.items);
  const [filteredItems, setFilteredItems] = useState(items);

  const handleSearch = (searchTerm: string) => {
    const filtered = items.filter((item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredItems(filtered);
  };

  return (
    <div>
      <Header />
      <div className={styles.menu_container}>
        <SearchBar onSearch={handleSearch} />

        <Link to={"/create-menu"} className={`${styles.button_link}`}>
          <button className={commonStyles.button}>Add new item</button>
        </Link>

        <h2>Items list</h2>
        <div className={styles.card}>
          {filteredItems.map((item: MenuItem, _) => (
            <div key={item.id} className={styles.card_container}>
              <Item item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
