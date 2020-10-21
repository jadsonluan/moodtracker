import React from 'react';
import './Tag.css';

function Tag(props) {
  return (
    <div 
      style={{backgroundColor: props.color}} 
      className={props.className ? props.className + " label" : "label"}
      onClick={props.onClick}>
      {props.name}
    </div>
  )
}

export default Tag;