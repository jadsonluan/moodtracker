import React from "react";
import MoodTag from "../MoodTag";
import "./MoodRecord.css";

function MoodRecord({mood}) {
  const getDate = () => {
    const date = new Date(mood.created_at)
    const hours = date.getHours()
    const minutes = date.getMinutes() >= 10 ? date.getMinutes() : '0' + date.getMinutes();
    let dateString = `${date.getDate()}/${date.getMonth()}/${date.getFullYear()} ${hours}:${minutes}`
    return dateString
  }
  return (
    <li className="mood-record">
      <MoodTag color="black" name={getDate()}/>
      <MoodTag color={mood.tag.color} name={mood.tag.name}/>
      <div className="description">{mood.description}</div>
    </li>
  )
}
 
export default MoodRecord;