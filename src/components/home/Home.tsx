import { Menu } from "../menu/Menu";
import commonStyles from "../../index.module.css";

export const Home = () => {
  return (
    <div className={commonStyles.main_container}>
      <Menu />
    </div>
  );
};
