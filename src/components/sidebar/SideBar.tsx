import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./navbar.module.css";
import dashboard_select from "../../assets/images/dashboard_icon_selected.png";
import unselect_dashboard_select from "../../assets/images/dashboard_icon_un_selected.png";
import add_record_unselect from "../../assets/images/add_record_un_selected.png";
import add_record_select from "../../assets/images/add_record_selected.png";

export default function SideBar() {
  const [dashboardHovered, setDashboardHovered] = useState(false);
  const [addRecordHovered, setAddRecordHovered] = useState(false);

  return (
    <>
      <aside className={styles.sidebar}>
        <nav role="navigation">
          <ul>
            <li
              onMouseEnter={() => setDashboardHovered(true)}
              onMouseLeave={() => setDashboardHovered(false)}>
              <Link to="/">
                <div className={styles.icons}>
                  <img
                    height={40}
                    width={40}
                    src={
                      dashboardHovered
                        ? unselect_dashboard_select
                        : dashboard_select
                    }
                    alt="Dashboard"
                  />
                  {dashboardHovered && (
                    <span className={styles.menu_item}>Dashboard</span>
                  )}
                </div>
              </Link>
            </li>

            <li
              onMouseEnter={() => setAddRecordHovered(true)}
              onMouseLeave={() => setAddRecordHovered(false)}>
              <Link to="/create-menu">
                <div className={styles.icons}>
                  <img
                    height={40}
                    width={40}
                    src={
                      addRecordHovered ? add_record_select : add_record_unselect
                    }
                    alt="Add Record"
                  />
                  {addRecordHovered && (
                    <span className={styles.menu_item}>Add Record</span>
                  )}
                </div>
              </Link>
            </li>
          </ul>
        </nav>
      </aside>
    </>
  );
}
