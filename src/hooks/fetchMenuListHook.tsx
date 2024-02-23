import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "./storeHooks";
import { getDataThunk } from "../store/items/itemThunk";

export const useFetchMenuList = () => {
  const dispatch = useAppDispatch();
  const menuData = useAppSelector((state) => state.items.items);

  useEffect(() => {
    const fetchData = async () => {
      try {
        dispatch(getDataThunk());
      } catch (error) {
        console.error("Error fetching menu data:", error);
      }
    };

    fetchData();
  }, []);

  return menuData;
};
