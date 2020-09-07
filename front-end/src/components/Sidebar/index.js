import React, { useState, useEffect } from 'react';
import LinkItem from '../LinkItem';
import './index.scss';

const Sidebar = (props) => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    setMenus(
      props.items || []
    );
  }, [props.items])

  return (
    <div className="side-bar" >
      {!props.isAdmin && <ul className="p-none m-none">
        {menus.map(menu => {
          return <LinkItem key={menu.id} routerLink={menu.routerLink} routerName={menu.routerName} />
        })}
        </ul>
      }
    </div>
  )
}

export default Sidebar;