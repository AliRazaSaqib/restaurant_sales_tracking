import React, { useState } from "react";
import styles from "./search.module.css";

interface Props {
  onSearch: (searchTerm: string) => void;
}

const SearchBar: React.FC<Props> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setSearchTerm(value);
    onSearch(value);
  };

  return (
    <div className={styles.search_wrapper}>
      <i className={`${styles.search_icon} fas fa-search`}></i>
      <input
        type="text"
        placeholder="Search by item name..."
        value={searchTerm}
        onChange={handleChange}
      />
      <button className={styles.search_button}>Search</button>
    </div>
  );
};

export default SearchBar;
