import { useFetchMenuList } from "../../hooks/fetchMenuListHook";
import { useAppSelector } from "../../hooks/storeHooks";
import { LayoutProps } from "../../types/CommonTypes";
import { Loader } from "../resuable-components/loader/Loader";
import SideBar from "../sidebar/SideBar";
import styles from "./layout.module.css";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  useFetchMenuList();
  const isLoading = useAppSelector((state) => state.items.isLoading);

  if (isLoading) return <Loader />;

  return (
    <div className={styles.layout}>
      <SideBar />
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Layout;
