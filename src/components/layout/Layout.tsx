import { LayoutProps } from "../../types/CommonTypes";
import { Navbar } from "../navbar/Navbar";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
