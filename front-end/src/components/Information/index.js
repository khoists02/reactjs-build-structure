import React from 'react';
import './index.scss';
import avatar from '../../assets/images/messi.jpeg';

const Information =(props)=> {
  return (
    <div className="information p-tb-md flex-center">
      <img className="avatar" src={avatar} alt="avatar" />
      <div className="name m-t-xs">LE MINH KHOI</div>
      <div className="title m-t-xs">Frontend developer</div>
    </div>
  )
}

export default Information;