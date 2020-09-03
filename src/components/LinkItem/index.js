import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

const LinkItem =(props)=> {
  return (
    <li className="link p-tb-sm">
      <a href={props.routerLink}>{props.routerName}</a>
      {/* <Link to={props.routerLink} ></Link>
      {props.routerName} */}
    </li>
  )
}

export default LinkItem;