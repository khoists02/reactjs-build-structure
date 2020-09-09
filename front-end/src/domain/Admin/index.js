import React from 'react';
import './index.scss';
import CreateArticle from '../../components/Admin/Articles/CreateArticle';
import Articles from '../../components/Admin/Articles';

const Admin =()=> {
  return (
    <div className="admin-template">
      <Articles></Articles>
      <CreateArticle></CreateArticle>
    </div>
  )
}

export default Admin;