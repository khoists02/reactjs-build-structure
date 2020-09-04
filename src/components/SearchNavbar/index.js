import React from 'react';

import './index.scss';

const SearchNavbar =(props)=> {
  return (
    <div className="search m-r-md">
      <input className="search-input" type="search" placeholder="Search Articles" />
    </div>
  )
}

export default SearchNavbar;