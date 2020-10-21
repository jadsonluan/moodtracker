import React, { useState } from "react";
import "./GridCell.css";

export default function GridCell({mood}) {
  const [showText, setShowText] = useState(false)
  const toggle = () => setShowText(!showText)
  return (
    <div 
      className={ showText ? 'expand-animation grid-cell' : 'grid-cell'}
      style={{ background: mood.tag.color }}
      onClick={toggle}
    >
      { showText ? mood.tag.name : '' }
    </div>
  )
}