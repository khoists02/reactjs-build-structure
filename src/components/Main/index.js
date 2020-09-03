import React from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';

import './main.scss';

const Main = (props) => {
  // const isAuthenticate = true;
  return (
    <div className="main flexbox">
      {props.articleLayout ? <div className="main"> {props.children} </div> : (
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