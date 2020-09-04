import React from 'react';
import './index.scss';

const SubMenu =(props)=> {
  const initialCategories = [
    {
      id: 1, label: 'Angular', logo: '', path: ''
    }, {
      id: 2, label: 'React', logo: '', path: ''
    }, {
      id: 3, label: 'Redux', logo: '', path: ''
    }, {
      id: 4, label: 'Ngrx Store', logo: '', path: ''
    }, {
      id: 5, label: 'React Hook', logo: '', path: ''
    }, {
      id: 6, label: 'Python', logo: '', path: ''
    },  {
      id: 7, label: 'Golang', logo: '', path: ''
    },  {
      id: 8, label: 'Girl and life', logo: '', path: ''
    }
  ];
  const classStandToTop = props.standTop ? 'stand-top' : '';
  return (
    <div className={"sub-menu " + classStandToTop}>
      <div className="categories block-site flexbox">
        {initialCategories.map(category=> {
          return (
            <div key={category.id} className="categories--item flex-center cursor-pointer">
              {category.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default SubMenu;