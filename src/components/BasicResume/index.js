import React from 'react';
import ListOfLogo from '../ListOfLogo';
import github from '../../assets/images/GitHub-Mark.png';
import webpack from '../../assets/images/webpack-npm-postcss-logo-javascript-others-thumb.jpg';
import angular from '../../assets/images/angularjs-front-and-back-ends-dart-typescript-a-png-clip-art.png';
import reactjs from '../../assets/images/download.png';
import redux from '../../assets/images/redux-react-javascript-freecodecamp-npm-png-favpng-6F2x50visKuC0trBQ0952Cm1E_t.jpg';
import nodejs from '../../assets/images/web-development-node-js-socket-io-javascript-network-socket-modernization.jpg';

const BasicResume =(props)=> {
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
  return (
    <div className="font-h4">
      I have 4 years+ of experience working with javascript and writing web apps. I have extensive knowledge of javascript, html, css and browser APIs as well as significant experience with popular frameworks and libraries like React, Redux, Angular, NgrxStore, ReactNative.

      <div className="logos m-t-sm">
        <ListOfLogo logos={initialList}></ListOfLogo>
      </div>
    </div>
  )
}

export default BasicResume;