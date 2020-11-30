import React from "react";
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
      <div className="mood-record-date">{getDate()}</div>
      <div className="mood-record-tag" style={{background: mood.tag.color}}>{mood.tag.name}</div>
      <div className="mood-record-description">{mood.description}</div>
    </li>
  )
}
 
export default MoodRecord;