import React from 'react';

import Dropdown from '../CommonComponents/Dropdown';
import thumbnail from '../../assets/images/messi.jpeg';
import './index.scss';

const ArticleItem =(props)=> {
  const handleSelect =(item)=> {
    console.log(item);
  }

  return (
    <div className="item m-b-sm p-sm flexbox">
      <div className="left pos-r">
        <div className="tag font-h4 m-b-xxs">Based on your reading history</div>

        <div className="title font-h3 m-b-xxs">Creating a Simple App With React.js</div>

        <div className="sort-des">Build a simple task-tracker app from scratch with React</div>

        {/* TimeAgo */}
        <div className="date font-h5">Aug 4, 2019 </div>

        <div className="dropdown-control">
          <Dropdown items={[
            { label: 'Report', value: 1 },
            { label: 'Save', value: 2 }
          ]} children={<div className="three-dot cursor-pointer">...</div>} bindLabel="label" select={handleSelect}>

          </Dropdown>
        </div>
      </div>

      <div className="thumbnail m-l-md">
        <img src={thumbnail} alt="thumbnail" />
      </div>
    </div>
  )
}

export default ArticleItem;