import React from "react";
import MoodRecord from "./MoodRecord";
import "./MoodRecordList.css";

function MoodRecordList(props) {
  return (
    <ul className="mood-record-list">
      {props.moods.map(mood => <MoodRecord key={mood._id} mood={mood}/>)}
    </ul>
  );
}

export default MoodRecordList;