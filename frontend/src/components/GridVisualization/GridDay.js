import React from "react";
import "./GridDay.css";

export default function GridDay({ moods }) {
  const DEFAULT_COLOR = "#EEE"

  const mostFrequentTag = (moods) => {
    const frequency = {}
    const tags = moods.map(mood => mood.tag)
    tags.forEach(tag => frequency[tag.name] = frequency[tag.name] ? frequency[tag.name] + 1 : 1)
    if (Object.values(frequency).length !== 0) {
      const maxFrequency = Math.max(...Object.values(frequency))
      const mostFrequents = Object.keys(frequency).filter(key => frequency[key] == maxFrequency)
      return tags.filter(tag => mostFrequents.includes(tag.name))
    }
    return []
  }

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