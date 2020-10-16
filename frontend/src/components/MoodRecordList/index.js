import React from "react";
import MoodRecord from "./MoodRecord";
import "./MoodRecordList.css";

function MoodRecordList({moods, searchFor}) {
  return (
    <ul className="mood-record-list">
      {moods
        .filter(mood => mood.description.includes(searchFor) || mood.tag.name.includes(searchFor))
        .map(mood => <MoodRecord key={mood._id} mood={mood}/>)}
    </ul>
  );
}

export default MoodRecordList;