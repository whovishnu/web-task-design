import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

import homeIcon from "../../assets/image/home.png";
import orderIcon from "../../assets/image/order.png";
import notificationIcon from "../../assets/image/notification.png";
import helpIcon from "../../assets/image/help.png";
import settingIcon from "../../assets/image/setting.png";
import logo from "../../assets/image/logo.png";

function Menubar() {
  let location = useLocation();

  return (
    <div className="menu-bar">
      <Link to="/">
        <img src={logo} width={200} className="logo" alt="logo" />
      </Link>

      <div className="menu">
        <Link to="/">
          <div
            className={
              location.pathname === "/"
                ? "item-selected menu-item"
                : "menu-item"
            }
          >
            <img src={homeIcon} className="menu-icon" alt="icon" />
            <div className="menu-item-name">Home</div>
          </div>
        </Link>

        <Link to="/order">
          <div
            className={
              location.pathname === "/order"
                ? "item-selected menu-item"
                : "menu-item"
            }
          >
            <img src={orderIcon} className="menu-icon" alt="icon" />
            <div className="menu-item-name">Orders</div>
          </div>
        </Link>

        <div className="menu-item">
          <img src={notificationIcon} className="menu-icon" alt="icon" />
          <div className="menu-item-name">Notification</div>
        </div>

        <div className="menu-item">
          <img src={helpIcon} className="menu-icon" alt="icon" />
          <div className="menu-item-name">Help & Support</div>
        </div>

        <div className="menu-item">
          <img src={settingIcon} className="menu-icon" alt="icon" />
          <div className="menu-item-name">Settings</div>
        </div>
      </div>
    </div>
  );
}

export default Menubar;
