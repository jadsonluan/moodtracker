import React from "react";
import { useTags } from "../../context/TagContext";
import TagCaption from "./TagCaption";
import "./Caption.css";

function Caption(props) {
  const {tags} = useTags();
  return (
    <div className="caption">
      <b>Legenda</b>
      <div className="items">
        { tags.map(tag => <TagCaption key={tag._id} tag={tag}/>)}
      </div>
    </div>
  )
}

export default Caption;