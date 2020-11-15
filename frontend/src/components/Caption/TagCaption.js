import React from "react";
import "./TagCaption.css";

export default function TagCaption({ tag }) {
  const style = { background: tag.color }
  return (
    <div className="tag-caption">
      <div className="tag-caption-color" style={style}></div>
      {tag.name}
    </div>
  )
}