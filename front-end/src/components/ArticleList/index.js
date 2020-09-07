import React, { useState, useEffect } from 'react';
import ArticleItem from '../ArticleItem';
import './index.scss';

const ArticleList = (props) => {
  // Do you know why the reason we have rule never put the useState or useEffect... inside condition,
  // you can see the console.log above , every time the re-render always effects to the dom, ... perfomance issue

  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const { keys } = props;
    getArticles({ keys });
  }, [props.keys]); // Use useEffect detecting the change value of props , remember the [props.keys] in the end function

  useEffect(() => {
    getArticles()
  }, [isLoading])

  const getArticles = (filter = { keys: ['DEFAULT'] }) => {
    const url = new URL("http://127.0.0.1:5000/articles"),
      params = { keys: filter.keys }
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]))
    fetch(
      url,
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json"
        })
      }
    )
      .then(res => res.json())
      .then(({ articles }) => {
        setArticles(articles);
        setIsLoading(false);
        // HOW TO TEST THE LOADING CALL API
        // https://blog.bitsrc.io/making-api-calls-with-react-hooks-748ebfc7de8c how to set page load more for the calling api
      })
      .catch(error => {
        setIsLoading(false);
      });
  }

  return (
    <div className="m-tb-md">
      {articles.map(article => {
        return <ArticleItem key={article.id} article={article} />
      })}

      {articles?.length === 0 && <div>NO RESULT FOR SECTION</div>}

      {/* WE WILL BUILD THE SCROLL EVENT HER WE HAVE THE BOTTOM */}
    </div>
  )
}

export default ArticleList;