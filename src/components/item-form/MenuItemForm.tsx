import { useLocation } from "react-router-dom";
import { ROUTE_QUERY_PARAMS } from "../../types/CommonTypes";
import { useMemo } from "react";
import { initialValues } from "../../utils/commonUtils";
import { Header } from "../resuable-components/header/Header";
import { useItemList } from "../../hooks";
import styles from "./form.module.css";
import DataForm from "./DataForm";

export const MenuItemForm = () => {
  const { search } = useLocation();
  const itemList = useItemList();

  const searchParams = new URLSearchParams(search);
  const itemId = searchParams.get(ROUTE_QUERY_PARAMS.ITEM_ID);

  const values = useMemo(
    () => itemList?.find(({ id }) => id === itemId),
    [itemList, itemId]
  );

  return (
    <div className={styles.form}>
      <Header />
      <DataForm initialValues={values !== undefined ? values : initialValues} />
    </div>
  );
};
