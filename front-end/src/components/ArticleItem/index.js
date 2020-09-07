import React, { useEffect, useState } from 'react';

import Dropdown from '../CommonComponents/Dropdown';
import thumbnail from '../../assets/images/messi.jpeg';
import './index.scss';

const ArticleItem = (props) => {
  const handleSelect = (item) => {
    console.log(item);
    console.log(process.env.API_URL);
  }

  return (
    <div className={`item m-b-sm p-sm flexbox`}>
      <div className="left pos-r">
        <div className="tag font-h4 m-b-xxs">{props.article.tag}</div>
        <div className="title font-h3 m-b-xxs">{props.article.title}</div>

        <div className="sort-des">{props.article.sortDescription}</div>

        {/* TimeAgo */}
        <div className="date font-h5">{props.article.date} </div>

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