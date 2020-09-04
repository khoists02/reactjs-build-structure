import React, { useState, useEffect } from 'react';

import './index.scss';
import avatar from '../../assets/images/messi.jpeg';

const UserProfile =(props)=> {
  const [isShowResult, setShowResult] = useState(false);
  const [listMenus , setListMenus] = useState([]);

  const initialListMenu = [
    { id: 1, name: 'Profile', path: '/dashboard' },
    { id: 2, name: 'Sign out', path: '/signout' },
  ]
  const showResult =()=> {
    setShowResult(!isShowResult);
  }

  useEffect(()=> {
    setListMenus(initialListMenu);
  }, []);

  return (
    <div className="user-profile flex-center pos-r">
      <img onClick={showResult} className="avatar cursor-pointer" src={avatar} alt="avatar" />
      <div className="result" style={{ visibility: isShowResult ? 'visible': 'hidden' }}>
        <div className="menu">
          {listMenus.map(menu=> {
            return (
              <div className="menu--item" key={menu.id}>
                <a className="cursor-pointer" href={menu.path} >{menu.name}</a>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default UserProfile;