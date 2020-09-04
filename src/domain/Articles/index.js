import React from 'react';
import Navbar from '../../components/Navbar';
import ArticleList from '../../components/ArticleList';
import './index.scss';

const Articles =(props)=> {
  return (
    <div className="article-wrapper">
      <Navbar></Navbar>

      <div className="article-list block-site">
          <ArticleList></ArticleList>
      </div>
    </div>
  )
}

export default Articles;