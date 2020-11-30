import React from "react";
import GridMonth from "./GridMonth";
import { useMoods } from "../../context/MoodContext";
import "./GridVisualization.css";
import { findMoodsByMonth } from "../../utils/mood-filter";

export default function GridVisualization(props) {
  const { moods } = useMoods();
  const year = new Date().getFullYear()
  const days = [...new Array(31)].map((_, day) => day + 1)
  const moodsByMonth = {}

  for (let month = 0; month < 12; month++) {
    moodsByMonth[month] = findMoodsByMonth(moods, new Date(year, month))
  }

  return (
    <div className="grid-visualization">
      <div className="grid-left-border"></div>
      <div className="grid-content">
        <h1>{year}</h1>
        <div className="days-header">
          { days.map(day => <div key={day} className="day">{day}</div>)}
        </div>
        <div className="days-content">
          { Object.values(moodsByMonth)
            .map((_moods, month) => 
              <GridMonth key={month} year={year} month={month} moods={_moods}/>) }
        </div>
      </div>
    </div>
  )
}