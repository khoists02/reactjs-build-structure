import React, { useRef, useState, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import ArticleList from '../../components/ArticleList';
import './index.scss';

const Articles =(props)=> {
  const [keys, setKeys] = useState([]);
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

  const handleOnChangeKey =(keys)=> {
    setKeys(keys);
  }

  return (
    <div className="article-wrapper">
      
      <Navbar isHideNav={isHideNav} onChangeKey={handleOnChangeKey}></Navbar>

      <div className="article-list block-site">
          {/* ARTICLE PAGE keys */}
          <ArticleList keys={keys}></ArticleList>
      </div>
    </div>
  )
}

export default Articles;