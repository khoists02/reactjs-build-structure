import React from "react";
import './index.scss';
const HeaderAdmin = (props) => {
  return (
    <div className="header flexbox">
      <div onClick={props.toggle}>COL</div>
    </div>

  )
}

export default HeaderAdmin;