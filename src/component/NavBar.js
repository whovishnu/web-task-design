import {
  Link
} from "react-router-dom";

const homeIcon = require('../assets/image/home.png')
const orderIcon = require('../assets/image/order.png')
const notificationIcon = require('../assets/image/notification.png')
const helpIcon = require('../assets/image/help.png')
const settingIcon = require('../assets/image/setting.png')
const logo = require('../assets/image/logo.png')

function Menubar() {
    return (
      <div className="menu-bar">
            <img src={logo} width={200} style={{margin:20}}/>
  
        <div className='menu'>
  
        <Link to="/">
          <div className='menu-item item-selected'>
            <img src={homeIcon} className="menu-icon"/>
            <div className='menu-item-name'>Home</div>
          </div>
        </Link>
        
          <div className='menu-item'>
            <img src={orderIcon} className="menu-icon"/>
            <div className='menu-item-name'>Orders</div>
          </div>
        
          <div className='menu-item'>
            <img src={notificationIcon} className="menu-icon"/>
            <div className='menu-item-name'>Notification</div>
          </div>
        
          <div className='menu-item'>
            <img src={helpIcon} className="menu-icon"/>
            <div className='menu-item-name'>Help & Support</div>
          </div>
        
          <div className='menu-item'>
            <img src={settingIcon} className="menu-icon"/>
            <div className='menu-item-name'>Settings</div>
          </div>
  
        </div>
      </div>
    );
  }
  
  export default Menubar;
  