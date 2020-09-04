import React, { useState, useEffect } from 'react';
import './index.scss';
import Modal from '../../../hooks/Modal';
import useModal from '../../../hooks/useModal';

const Dropdown =(props)=> {
  const [ items, setItems ] = useState([]);
  const [ active, setActive ] = useState(false);
  const {isShowing, toggle} = useModal();

  useEffect(()=> {
    setItems(props.items || []);
  }, [props.items]);

  const onOpen =()=> {
    setActive(!active);
  };

  const onSelect =(item)=> {
    props.select(item);
    setActive(false);
  }

  return (
    <div className="dropdown pos-r">
      <div className="parent" onClick={onOpen}>
        {props.children}
      </div>
      <div className="result" style={{ visibility: active ? 'visible': 'hidden' }}>
      {items.map((item, index)=> {
            return (
              <div className="result--item cursor-pointer" key={index} onClick={()=> {
                onSelect(item);
                toggle();
              }}>
                {item[props.bindLabel]}
                {/* <button className="button-default" onClick={toggle}>Show Modal</button> */}
              </div>
            )
          })}
      </div>
      <Modal
        isShowing={isShowing}
        hide={toggle}
      />
    </div>
  )
}

export default Dropdown;