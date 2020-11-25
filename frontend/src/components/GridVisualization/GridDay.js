import React from "react";
import "./GridDay.css";
import {mostFrequentTag} from "../../utils/mood-filter";

export default function GridDay({ moods }) {
  const DEFAULT_COLOR = "#EEE"

  const tags = mostFrequentTag(moods)
  let background = DEFAULT_COLOR
  if (tags.length === 1) {
    background = tags[0].color
  } else if (tags.length > 1) {
    background = `linear-gradient(45deg, ${tags[0].color} 50%, ${tags[1].color} 50%)`;
  }

  const style = { background }

  return <div className='grid-cell' style={style}></div>
}