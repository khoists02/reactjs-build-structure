import React, { Component } from 'react';
import Navbar from '../Navbar';
import Header from '../Header';
import Sidebar from '../Sidebar';

const Main = (props) => {
  return (
    <div class="main">
      <Navbar />
      <Header />
      <Sidebar />
      {props.children}
    </div>
  )
}

export default Main;