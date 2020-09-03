import React from 'react';
import SubMenu from '../SubMenu';

import './index.scss';

const Navbar =(props)=> {
  return (
    <div className="nav-bar ">
      <div className="main block-site flex-center-between">
        <div className="left-nav">Medium</div>
        <div className="right-nav">Profile</div>
      </div>
      {/* SUB NAVBAR HERE */}
      <SubMenu></SubMenu>
    </div>
  )
}


export default Navbar;