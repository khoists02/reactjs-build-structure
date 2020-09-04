import React, { useState } from 'react';
import './index.scss';

const SubMenu =(props)=> {
  const [active, setActive] = useState(null);
  const initialCategories = [
    {
      id: 1, label: 'Angular', logo: '', path: '', keys: ['ANGULAR'], select: false
    }, {
      id: 2, label: 'React', logo: '', path: '', keys: ['REACT, DEFAULT'], select: false
    }, {
      id: 3, label: 'Redux', logo: '', path: '', keys: ['REDUX'], select: false
    }, {
      id: 4, label: 'Ngrx Store', logo: '', path: '', keys: ['NGRXSTORE'], select: false
    }, {
      id: 5, label: 'React Hook', logo: '', path: '', keys: ['HOOK'], select: false
    }, {
      id: 6, label: 'Python', logo: '', path: '', keys: ['PYTHON'], select: false
    },  {
      id: 7, label: 'Golang', logo: '', path: '', keys: ['GO'], select: false
    },  {
      id: 8, label: 'Girl and life', logo: '', path: '', keys: ['ANOTHER'], select: false
    }
  ];

  const classStandToTop = props.standTop ? 'stand-top' : '';

  const onSelect =(id)=> {
    setActive(id);
    props.onChangeType(initialCategories.find(x=> x.id === id)?.keys);
  }

  return (
    <div className={"sub-menu " + classStandToTop}>
      <div className="categories block-site flexbox">
        {initialCategories.map(category=> {
          return (
            <div
              key={category.id}
              onClick={()=> onSelect(category.id)}
              className={`categories--item flex-center cursor-pointer ${active === category.id ? 'active strong' : ''}`}>
              {category.label}
            </div>
          )
        })}
      </div>
    </div>
  )
}


export default SubMenu;