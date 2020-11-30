import React from "react";
import useCalendar from "../../hooks/useCalendar";
import { useMoods } from "../../context/MoodContext";
import { findMoodsByDay, mostFrequentTag, monthNames, dayShortNames } from "../../utils/mood-filter";

import "./Calendar.css";

function Calendar(props) {
  const { 
    calendarRows, selectedDate,
    getNextMonth, getPrevMonth 
  } = useCalendar();

  const { moods } = useMoods();

  const getTagsByDate = (date) => {
    const moodsByDate = findMoodsByDay(moods, date);
    const tags = mostFrequentTag(moodsByDate);
    return tags;
  }

  return (
    <div className="calendar">
      <div className="calendar-header">
        <button className="calendar-button" onClick={getPrevMonth}>{"<"}</button>
        <h1>
          {`${monthNames[selectedDate.getMonth()]}, ${selectedDate.getFullYear()}`}
        </h1>
        <button className="calendar-button" onClick={getNextMonth}>{">"}</button>
      </div>

      <table className="table">
        <thead>
          <tr>
            { dayShortNames.map(day => <td key={day}>{day}</td>)}
          </tr>
        </thead>
        <tbody>
          { Object.values(calendarRows).map((row, i) => (
            <tr key={i}>
              { row.map(col => {
                return (
                  <td key={col.date} className={`${col.classes}`}>
                    <div className="calendar-day">
                      <p>{col.value}</p>
                      <div className="calendar-moods">
                        { getTagsByDate(col.date).map(tag => (
                          <div 
                            key={tag._id} 
                            className="calendar-mood" 
                            style={{background: tag.color}}
                          />
                        ))}
                      </div>
                    </div>
                  </td>
                ) 
              })}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Calendar;