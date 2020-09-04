import React from 'react';
import ArticleItem from '../ArticleItem';
import './index.scss';

const ArticleList =(props)=> {
  return (
    <div className="m-tb-md">
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
      <ArticleItem />
    </div>
  )
}

export default ArticleList;