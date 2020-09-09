import React, { useState, useEffect } from 'react';
import './index.scss';

const Articles =(props)=> {
  const [ articles, setArticles ] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(()=> {
    const url = "http://127.0.0.1:5000/articles";
    fetch(url,
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
      })
      .catch(error => {
      });
  }, []);

  const deleteArticle = article => {
    fetch("http://127.0.0.1:5000/article",
      {
        method: "DELETE",
        headers: new Headers({
          Accept: "application/json"
        }),
        body: {
          id: article.id
        }
      }
    )
      .then(res => res.json())
      .then(() => {
        console.log('deleted');
      })
      .catch(error => {
        console.log('delete error');
      });
  }

  return (
    <div className={`articles m-b-md`}>
      <table className="table">
        <thead>
          <th>Title</th>
          <th>Tag</th>
          <th style={{ width: "20%" }}>Date</th>
          <th >Date</th>
        </thead>
        <tbody>
          {articles?.map(article=> {
            return (
              <tr key={article.id}>
                <td>{article.title}</td>
                <td>{article.tag}</td>
                <td>{article.date}</td>
                <td className="cursor-pointer" onClick={article=> deleteArticle(article)}>Delete</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default Articles;