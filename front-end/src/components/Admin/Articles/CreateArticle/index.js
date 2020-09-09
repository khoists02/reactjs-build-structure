import React, { useState, useEffect } from 'react';
import './index.scss';

const CreateArticle = (props) => {
  // const initialForm = {
  //   title: '',
  //   tag: '',
  //   sortDescription: '',
  //   date: '',
  //   key: '',
  //   handleCode: '',
  //   user_id: '',
  // }

  const [title, setTitle] = useState("");
  const [tag, setTag] = useState("");
  const [sortDescription, setSortDescription] = useState("");
  const [isSubmitPost, setIsSubmitPost] = useState(false);

  const handleSubmit = () => {
    const data = {
      title,
      tag,
      sortDescription
    }
    setIsSubmitPost(true)
  }

  useEffect(() => {
    const data = {
      title,
      tag,
      sortDescription,
    };

    // how to validate in react form
    if (!data.title) {
      return;
    }

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };

    fetch('http://127.0.0.1:5000/article', requestOptions)
      .then(response => response.json())
      .then(data => {
        console.log('data', data);
        setIsSubmitPost(false)
      })
      .catch(error=> {
        console.log('error', error);
        setIsSubmitPost(false)
      })

  }, null)

  return (
    <div className={`create`}>
      <form onSubmit={handleSubmit}>
        <div className="form-row">
          <div className="form-control">
            <label className="form-label">Title <i className="asterisk"></i></label>
            <input className="form-input" type="text" value={title} onChange={e => setTitle(e.target.value)} />
          </div>

          <div className="form-control">
            <label className="form-label">Tag <i className="asterisk"></i></label>
            <input className="form-input" type="text" value={tag} onChange={e => setTag(e.target.value)} />
          </div>

          <div className="form-control">
            <label className="form-label">Description <i className="asterisk"></i></label>
            <textarea className="form-input" rows="8" value={sortDescription} onChange={e => setSortDescription(e.target.value)} ></textarea>
          </div>
        </div>
      </form>

      <div className="flex-center buttons-row fixed-bottom">
        <button className="btn btn--fixed btn--box" type="button" onClick={()=> handleSubmit}>
          Post
        </button>
      </div>
    </div>
  )
}

export default CreateArticle;