import { LayoutProps } from "../../types/CommonTypes";
import SideBar from "../sidebar/SideBar";
import styles from "./layout.module.css";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.layout}>
      <SideBar />
      <div className={styles.children}>{children}</div>
    </div>
  );
};

export default Layout;
