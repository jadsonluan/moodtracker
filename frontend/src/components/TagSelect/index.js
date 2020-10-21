import React from "react";
import Tag from "../Tag";
import "./TagSelect.css";

export default function TagSelect({ tags, selected, selectTag }) {
  return (
    <div className="tags">
      { tags.map((tag, idx) => {
        let isSelected = selected && selected._id === tag._id
        return (
          <Tag 
            name={tag.name} 
            color={tag.color}
            key={idx} 
            onClick={ () => isSelected ? selectTag(undefined) : selectTag(tag) }
            className={ isSelected ? "selected" : "" } 
          />
        )
      }
          
        )
      }
    </div>
  )
}