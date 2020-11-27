import React from "react";
import GridMonth from "./GridMonth";
import { useMoods } from "../../context/MoodContext";
import "./GridVisualization.css";
import { findMoodsByMonth, monthShortNames as months } from "../../utils/mood-filter";

export default function GridVisualization(props) {
  const { moods } = useMoods();
  const year = new Date().getFullYear()
  const days = [...new Array(31)].map((_, day) => day + 1)

  const moodsByMonth = {}
  months.map((_, month) => {
    moodsByMonth[month] = findMoodsByMonth(moods, new Date(year, month))
  })

  return (
    <div className="grid-visualization">
      <div className="grid-left-border"></div>
      <div className="grid-content">
        <h1>{year}</h1>
        <div className="days-header">
          { days.map(day => <div className="day">{day}</div>)}
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