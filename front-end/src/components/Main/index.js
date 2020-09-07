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
        <div className="flexbox">
          <div className="sidebar" style={{ visibility: toggle ? 'hidden': 'visible' }}>
            <Sidebar items={
                  [
                    // { id: 1, routerLink: '/', routerName: 'Dashboard' },
                    // { id: 2, routerLink: '/about', routerName: 'About me' },
                    // { id: 3, routerLink: '/skills', routerName: 'Skills' },
                    // { id: 4, routerLink: '/articles', routerName: 'My Articles' },
                  ]
                } isAdmin={true} toggle={toggle} />
          </div>
          <div className={`body ${toggle ? 'block-site': ''}`}>
            <HeaderAdmin toggle={handleToggle}></HeaderAdmin>
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