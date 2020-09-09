import React from "react";
import './index.scss';
import IconBar from '../../../assets/images/bar-home.png';
import IconClose from '../../../assets/images/ico-close.jpg';

const HeaderAdmin = (props) => {
  return (
    <div className={`header flexbox ${props.isToggle ? 'left-none': ''}`}>
      <div onClick={props.toggle}>
        <img className="bar-icon cursor-pointer" src={props.isToggle ? IconClose :IconBar} />
      </div>
    </div>

  )
}

export default HeaderAdmin;