import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import ArticleList from '../../components/ArticleList';
import './index.scss';

const Articles =(props)=> {
  const prevScrollY = useRef(0);

  const [goingUp, setGoingUp] = useState(false);
  const [isHideNav, setIsHideNav] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (prevScrollY.current < currentScrollY && goingUp) {
        setGoingUp(false);
      }
      if (prevScrollY.current > currentScrollY && !goingUp) {
        setGoingUp(true);
      }

      prevScrollY.current = currentScrollY;

      setIsHideNav(currentScrollY > 70);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [goingUp]);

  return (
    <div className="article-wrapper">
      
      <Navbar isHideNav={isHideNav}></Navbar>

      <div className="article-list block-site">
          {/* ARTICLE PAGE TYPE */}
          <ArticleList type={'DEFAULT'}></ArticleList>
      </div>
    </div>
  )
}

export default Articles;