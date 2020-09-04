import React from 'react';
import SubMenu from '../SubMenu';
import RightNavbar from '../RightNavbar';

import './index.scss';

const Navbar =(props)=> {
  const handleChangeKey =(keys)=> {
    props.onChangeKey(keys);
  }
  return (
    <div className="nav-bar ">
      <div className="main block-site flex-center-between" style={{ visibility: props.isHideNav ? 'hidden' : 'visible' }}>
        <div className="left-nav">Medium</div>
        <div className="right-nav">
          <RightNavbar></RightNavbar>
          </div>
      </div>
      {/* SUB NAVBAR HERE */}
      <SubMenu standTop={props.isHideNav} onChangeType={handleChangeKey}></SubMenu>
    </div>
  )
}

export default Navbar;