import React, { useEffect, useState } from 'react';

import Dropdown from '../CommonComponents/Dropdown';
import thumbnail from '../../assets/images/messi.jpeg';
import './index.scss';

const ArticleItem =(props)=> {
  const [ stores, setStores ] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const handleSelect =(item)=> {
    console.log(item);
    console.log(process.env.API_URL);
  }

  useEffect(() => {
    fetch(
      "http://127.0.0.1:5000/store",
      {
        method: "GET",
        headers: new Headers({
          Accept: "application/json"
        })
      }
    )
    .then(res=> res.json())
    .then(({stores})=> {
      console.log('stores', stores);
      setStores(stores);
      setIsLoading(false);
      // setTimeout(() => {
      //   setIsLoading(false);
      // }, 3000);
      // HOW TO TEST THE LOADING CALL API
      // https://blog.bitsrc.io/making-api-calls-with-react-hooks-748ebfc7de8c how to set page load more for the calling api
    })
    .catch(error => console.log(error));
  }, [isLoading])

  return (
    <div className={`item m-b-sm p-sm flexbox ${isLoading ? 'hidden': ''}`}>
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