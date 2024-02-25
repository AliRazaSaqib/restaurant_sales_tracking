import { useAppSelector } from "./storeHooks";

export const useItemList = () =>
  useAppSelector(({ items: { items } }) => items);
