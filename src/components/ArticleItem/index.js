import React from 'react';
import thumbnail from '../../assets/images/messi.jpeg';
import './index.scss';

const ArticleItem =(props)=> {
  return (
    <div className="item m-b-sm p-sm flexbox">
      <div className="left pos-r">
        <div className="tag font-h4 m-b-xxs">Based on your reading history</div>

        <div className="title font-h3 m-b-xxs">Creating a Simple App With React.js</div>

        <div className="sort-des">Build a simple task-tracker app from scratch with React</div>

        <div className="date font-h5">Aug 4, 2019 </div>

        <div className="control" style={{ display: 'none' }}></div>
      </div>

      <div className="thumbnail m-l-md">
        <img src={thumbnail} alt="thumbnail" />
      </div>
    </div>
  )
}

export default ArticleItem;