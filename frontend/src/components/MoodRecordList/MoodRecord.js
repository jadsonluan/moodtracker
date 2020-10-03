import React from "react";
import MoodTag from "../MoodTag";
import "./MoodRecord.css";

function MoodRecord({mood}) {
  return (
    <li className="mood-record">
      <MoodTag color={mood.tag.color} name={mood.tag.name}/>
      <div className="description">{mood.description}</div>
    </li>
  )
}
 
export default MoodRecord;