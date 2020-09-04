import React, { useState, useEffect } from 'react';
import ArticleItem from '../ArticleItem';
import './index.scss';

const ArticleList =(props)=> {
  console.log('--- props ---', props);
  // Do you know why the reason we have rule never put the useState or useEffect... inside condition,
  // you can see the console.log above , every time the re-render always effects to the dom, ... perfomance issue

  const [ articles, setArticles ] = useState([]);

  console.log('---- keys ----', props.keys);

  const initialArticles = [
    {
      id: 1,
      tag: 'Based on your reading history',
      title: 'Creating a Simple App With React.js',
      sortDescription: 'Build a simple task-tracker app from scratch with React',
      date: 'Aug 4, 2019'
    }, {
      id: 2,
      tag: 'Based on your reading history',
      title: 'Creating a Simple App With React.js',
      sortDescription: 'Build a simple task-tracker app from scratch with React',
      date: 'Aug 4, 2019'
    }, {
      id: 3,
      tag: 'Based on your reading history',
      title: 'Creating a Simple App With React.js',
      sortDescription: 'Build a simple task-tracker app from scratch with React',
      date: 'Aug 4, 2019'
    }, {
      id: 4,
      tag: 'Based on your reading history',
      title: 'Creating a Simple App With React.js',
      sortDescription: 'Build a simple task-tracker app from scratch with React',
      date: 'Aug 4, 2019'
    }
  ]

  useEffect(()=> {
    setArticles(initialArticles);
  }, []);
  // HERE IS QUERY ARTICLE LIST BY TYPE
  // USE useEffect to fetch API data

  return (
    <div className="m-tb-md">
      {articles.map(article=> {
        return <ArticleItem key={article.id} article={article} />
      })}

      {/* WE WILL BUILD THE SCROLL EVENT HER WE HAVE THE BOTTOM */}
    </div>
  )
}

export default ArticleList;