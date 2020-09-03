import React, { useState, useEffect } from 'react';


import './index.scss';

const ListOfLogo =(props)=> {
  const [logos, setLogos] = useState([]);

  useEffect(()=> {
    setLogos(props.logos);
  }, []);

  const noborderClass = props?.noborder ? 'no-border' : '';

  return (
    <div className={"logo cursor-pointer " + noborderClass}>
      {logos.map(logo=> {
        return (
          logo.path ? (
            <a key={logo.id}  className="cursor-pointer" href={logo.path} target="_blank">
              <img src={logo.logo} />
            </a>
          ) : <img key={logo.id} src={logo.logo} />
        )
      })}
    </div>
  );
}

export default ListOfLogo;