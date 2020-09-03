import React, { useState, useEffect } from 'react';
import github from '../../assets/images/GitHub-Mark.png';
import webpack from '../../assets/images/webpack-npm-postcss-logo-javascript-others-thumb.jpg';
import angular from '../../assets/images/angularjs-front-and-back-ends-dart-typescript-a-png-clip-art.png';
import reactjs from '../../assets/images/download.png';
import redux from '../../assets/images/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t.jpg';
import nodejs from '../../assets/images/web-development-node-js-socket-io-javascript-network-socket-modernization.jpg';

import './index.scss';

const ListOfLogo =(props)=> {
  const [logos, setLogos] = useState([]);
  const initialList = [
    {  
      id: 1, logo: github
    }, {
      id: 2, logo: webpack
    }, {
      id: 3, logo: angular,
    }, {
      id: 4, logo: reactjs
    }, {
      id: 5, logo: nodejs
    }, {
      id: 6, logo: redux
    }
  ];

  useEffect(()=> {
    setLogos(initialList);
  }, []);

  return (
    <div className="logo cursor-pointer">
      {logos.map(logo=> {
        return (
          <img key={logo.id} src={logo.logo} />
        )
      })}
    </div>
  );
}

export default ListOfLogo;