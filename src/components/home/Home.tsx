import { useFetchMenuList } from "../../hooks/fetchMenuListHook";
import { useAppSelector } from "../../hooks/storeHooks";
import { Menu } from "../menu/Menu";
import { Loader } from "../resuable-components/loader/Loader";
import commonStyles from "../../index.module.css";

export const Home = () => {
  useFetchMenuList();
  const isLoading = useAppSelector((state) => state.items.isLoading);

  return (
    <div className={commonStyles.main_container}>
      {isLoading ? <Loader /> : <Menu />}
    </div>
  );
};
