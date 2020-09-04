import React from 'react';
import SearchNavbar from '../SearchNavbar';
import UserProfile from '../UserProfile';

import './index.scss';

const RightNavbar =(props)=> {
  return (
    <div className="control flex-center-between">
      {/* SEARCH HERE */}
      <SearchNavbar></SearchNavbar>
      {/* NOTIFICATION HERE */}
      <span className="m-r-md">
        <i className="icon icon-tick icon--sm"></i>
      </span>

      {/* USER PROFILE HERE */}
      <UserProfile></UserProfile>
    </div>
  )
}

export default RightNavbar;