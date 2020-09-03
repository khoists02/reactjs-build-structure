import React from 'react';
import Sidebar from '../Sidebar';
import './main.scss';

const Main = (props) => {
  return (
    <div className="main flexbox">
      {/* <Navbar />
      <Header /> */}
      <div className="sidebar p-md">
        <Sidebar />
      </div>
      <div className="body flex-auto p-md">
        {props.children}
      </div>
    </div>
  )
}

export default Main;