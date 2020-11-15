import React from "react";
import GridDay from "./GridDay";
import "./GridMonth.css";
import { findMoodsByDay, months as monthToName, numberOfDays } from "../../utils/mood-filter"

export default function GridMonth({ moods, month, year }) {
  const monthSize = numberOfDays(month, year)
  const days = [...new Array(monthSize)].map((_, i) => i + 1)
  const moodsByDay = days.map(day => findMoodsByDay(moods, new Date(year, month, day)))

  return (
    <div className="grid-column">
      <h3>{monthToName[month]}</h3>
      { moodsByDay.map((moods, id) => <GridDay key={id} moods={moods}/>)}
    </div>
  )
}