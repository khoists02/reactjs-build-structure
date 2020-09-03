import React, { useState, useEffect } from 'react';
import LinkItem from '../LinkItem';
import './index.scss';

const Sidebar = (props) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus([
      { id: 1, routerLink: '/', routerName: 'Dashboard' },
      { id: 2, routerLink: '/about', routerName: 'About me' },
      { id: 3, routerLink: '/skills', routerName: 'Skills' },
      { id: 4, routerLink: '/articles', routerName: 'My Articles' },
    ]);
  }, [])

  return (
    <div className="side-bar ">
      <ul className="p-none m-none">
        {menus.map(menu => {
          return <LinkItem key={menu.id} routerLink={menu.routerLink} routerName={menu.routerName} />
        })}
      </ul>
    </div>
  )
}

export default Sidebar;