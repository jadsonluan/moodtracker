import React from "react";
import GridMonth from "./GridMonth";
import Caption from "../Caption";
import { useMoods } from "../../context/MoodContext";
import "./GridVisualization.css";
import { findMoodsByMonth, months } from "../../utils/mood-filter";

const feliz = { name: 'feliz', color: "green" }
const puto = { name: 'puto', color: "red" }
const triste = { name: 'triste', color: "blue" }
const ansioso = { name: 'ansioso', color: "purple" }

const choice = (array) => array[Math.floor(Math.random() * array.length)]

const createMoods = () => {
  const tags = [feliz, ansioso, triste, puto]
  const firstDayByMonth = [...new Array(12)].map((month, i) => new Date(2020, i, 1))
  console.log(firstDayByMonth)
  const moods = []
  firstDayByMonth.forEach(date => {
    let mood = { _id: Math.random(), description: '', tag: choice(tags), created_at: date }
    moods.push(mood)
  })
  return moods
}

export default function GridVisualization(props) {
  const { moods } = useMoods();
  // const moods = createMoods()
  const year = new Date().getFullYear()
  const days = [...new Array(31)].map((_, day) => day + 1)

  const moodsByMonth = {}
  months.map((_, month) => {
    moodsByMonth[month] = findMoodsByMonth(moods, new Date(year, month))
  })

  return (
    <div className="grid-visualization">
      <div className="content">
        <div className="days-header">
          { days.map(day => <div className="day">{day}</div>)}
        </div>
        <div>
          { Object.values(moodsByMonth)
            .map((_moods, month) => 
              <GridMonth key={month} year={year} month={month} moods={_moods}/>) }
        </div>
      </div>
      <div className="extra-info">
        <Caption/>
      </div>
    </div>
  )
}