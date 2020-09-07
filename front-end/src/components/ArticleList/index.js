import React, { useState, useEffect } from 'react';
import ArticleItem from '../ArticleItem';
import './index.scss';

const ArticleList =(props)=> {
  // Do you know why the reason we have rule never put the useState or useEffect... inside condition,
  // you can see the console.log above , every time the re-render always effects to the dom, ... perfomance issue

  const [ articles, setArticles ] = useState([]);

  const initialArticles = [
    {
      id: 1,
      tag: 'Based on your reading history',
      title: 'Creating a Simple App With React.js',
      sortDescription: 'Build a simple task-tracker app from scratch with React',
      date: 'Aug 4, 2019',
      key: 'REACT'
    }, {
      id: 2,
      tag: 'Based on your reading history',
      title: 'Creating a Simple App With React.js',
      sortDescription: 'Build a simple task-tracker app from scratch with React',
      date: 'Aug 4, 2019',
      key: 'REACT'
    }, {
      id: 3,
      tag: 'Based on your reading history',
      title: 'Creating a Simple App With React.js',
      sortDescription: 'Build a simple task-tracker app from scratch with React',
      date: 'Aug 4, 2019',
      key: 'REACT'
    }, {
      id: 4,
      tag: 'Based on your reading history',
      title: 'Creating a Simple App With React.js',
      sortDescription: 'Build a simple task-tracker app from scratch with React',
      date: 'Aug 4, 2019',
      key: 'ANGULAR'
    }
  ]

  useEffect(() => {
    const { keys } = props;
    const cloneArticles = [];
    initialArticles.forEach(article=> {
        keys.find(x=> x?.indexOf(article.key) > -1) &&  cloneArticles.push(article);
    })
    setArticles(cloneArticles);
  }, [props.keys]); // Use useEffect detecting the change value of props , remember the [props.keys] in the end function

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

      {articles?.length === 0 && <div>NO RESULT FOR SECTION</div>}

      {/* WE WILL BUILD THE SCROLL EVENT HER WE HAVE THE BOTTOM */}
    </div>
  )
}

export default ArticleList;