import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

import './main.scss';

const Main = (props) => {
  return (
    <div className="main flexbox">
      {props.adminLayout && <div className="admin">{props.children}</div>}
      {props.articleLayout && <div className="main"> {props.children} </div>}
      {!props.adminLayout && !props.articleLayout && (
        <div className="flexbox">
          <div className="sidebar">
            <Header />
            <Sidebar />
          </div>
          <div className="body ">
            {props.children}  
          </div>
        </div>
      )}
    </div>
  )
}

export default Main;