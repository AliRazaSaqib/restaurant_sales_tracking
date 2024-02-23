import { useFetchMenuList } from "../../hooks/fetchMenuListHook";
import { useAppSelector } from "../../hooks/storeHooks";
import { Menu } from "../menu/Menu";
import { Loader } from "../resuable-components/loader/Loader";

export const Home = () => {
  useFetchMenuList();
  const isLoading = useAppSelector((state) => state.items.isLoading);

  return <div>{isLoading ? <Loader /> : <Menu />}</div>;
};
