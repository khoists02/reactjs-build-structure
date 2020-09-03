import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

import './main.scss';

const Main = (props) => {
  return (
    <div className="main flexbox">
      {/* <Navbar />
      <Header /> */}
      <div className="sidebar">
        <Header />
        <Sidebar />
      </div>
      <div className="body ">
        {props.children}
      </div>
    </div>
  )
}

export default Main;