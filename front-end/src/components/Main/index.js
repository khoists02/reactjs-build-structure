import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import Header from '../Header';
import HeaderAdmin from '../Layouts/HeaderAdmin';

import './main.scss';

const Main = (props) => {
  const [ toggle, setToggle ] = useState(false);

  const handleToggle =()=> {
    setToggle(!toggle);
  }

  return (
    <div className="main flexbox">
      {props.adminLayout &&
        <div className="flexbox full-width">
          <div className={`sidebar sidebar-admin`} style={{ display: toggle ? 'none': 'block' }}>
            <Sidebar items={
                  [
                    { id: 1, routerLink: '', routerName: 'Article' },
                    { id: 2, routerLink: '', routerName: 'Profile' },
                    { id: 3, routerLink: '', routerName: 'Users' },
                  ]
                } isAdmin={true} toggle={toggle} />
          </div>
          <div className={`body full-width ${toggle ? 'block-site m-tb-md': ''}`}>
            <HeaderAdmin isToggle={toggle} toggle={handleToggle}></HeaderAdmin>
            <div className="wrapper">
              {props.children}  
            </div> 
          </div>
        </div>
      }
      {props.articleLayout && <div className="main"> {props.children} </div>}
      {!props.adminLayout && !props.articleLayout && (
        <div className="flexbox">
          <div className="sidebar">
            <Header />
            <Sidebar items={
              [
                { id: 1, routerLink: '/', routerName: 'Dashboard' },
                { id: 2, routerLink: '/about', routerName: 'About me' },
                { id: 3, routerLink: '/skills', routerName: 'Skills' },
                { id: 4, routerLink: '/articles', routerName: 'My Articles' },
              ]
            } isAdmin={false} />
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