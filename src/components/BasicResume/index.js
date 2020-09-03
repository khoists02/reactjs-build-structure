import React from 'react';
import ListOfLogo from '../ListOfLogo';

const BasicResume =(props)=> {
  return (
    <div className="font-h4">
      I have 4 years+ of experience working with javascript and writing web apps. I have extensive knowledge of javascript, html, css and browser APIs as well as significant experience with popular frameworks and libraries like React, Redux, Angular, NgrxStore, ReactNative.

      <div className="logos m-t-sm">
        <ListOfLogo></ListOfLogo>
      </div>
    </div>
  )
}

export default BasicResume;