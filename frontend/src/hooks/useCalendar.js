import { useState } from "react";

const LAST_MONTH = 11;
const FIRST_MONTH = 0;

const useCalendar = () => {
  const today = new Date();
  const [selectedDate, setSelectedDate] = useState(today);

  const daysInWeek = [1, 2, 3, 4, 5, 6, 0];

  const currentMonthFirstDay = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 1).getDay();
  const currentMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth() + 1, 0).getDate();
  const prevMonthLastDate = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), 0).getDate();

  const startingPoint = daysInWeek.indexOf(currentMonthFirstDay);
  let prevMonthStartingPoint = prevMonthLastDate - startingPoint + 1;
  let currentMonthCounter = 1;
  let nextMounthCounter = 1;

  const calendarRows = {};
  const rows = 6;
  const cols = 7;

  const getPrevMonthDate = (date) => {
    const year = selectedDate.getMonth() === FIRST_MONTH ? selectedDate.getFullYear() - 1 : selectedDate.getFullYear();
    const month = selectedDate.getMonth() === FIRST_MONTH ? LAST_MONTH : selectedDate.getMonth() - 1;
    return new Date(year, month, date);
  }

  const getNextMonthDate = (date) => {
    const year = selectedDate.getMonth() === LAST_MONTH ? selectedDate.getFullYear() + 1 : selectedDate.getFullYear();
    const month = selectedDate.getMonth() === LAST_MONTH ? FIRST_MONTH : selectedDate.getMonth() + 1;
    return new Date(year, month, date);
  }

  const isToday = (date) => {
    const sameYear = selectedDate.getFullYear() === today.getFullYear();
    const sameMonth = selectedDate.getMonth() === today.getMonth();
    const sameDate = date === today.getDate();
    return sameYear && sameMonth && sameDate;
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!calendarRows[i]) calendarRows[i] = [];

      if (i === 0) {
        if (j < startingPoint) {
          calendarRows[i] = [...calendarRows[i], { 
            classes: 'in-prev-month', 
            date: getPrevMonthDate(prevMonthStartingPoint), 
            value: prevMonthStartingPoint 
          }];
          prevMonthStartingPoint++;
        } else {
          calendarRows[i] = [...calendarRows[i], { 
            classes: isToday(currentMonthCounter) ? "today" : "", 
            date: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), currentMonthCounter), 
            value: currentMonthCounter 
          }];
          currentMonthCounter++;
        }
      } else if (currentMonthCounter <= currentMonthLastDate) {
        calendarRows[i] = [...calendarRows[i], { 
          classes: isToday(currentMonthCounter) ? "today" : "", 
          date: new Date(selectedDate.getFullYear(), selectedDate.getMonth(), currentMonthCounter), 
          value: currentMonthCounter 
        }];
        currentMonthCounter++;
      } else {
        calendarRows[i] = [...calendarRows[i], { 
          classes: 'in-next-month', 
          date: getNextMonthDate(nextMounthCounter), 
          value: nextMounthCounter 
        }];
        nextMounthCounter++;
      }
    }
  }

  const getPrevMonth = () => {
    setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() - 1, 1));
  }

  const getNextMonth = () => {
    setSelectedDate(prevValue => new Date(prevValue.getFullYear(), prevValue.getMonth() + 1, 1));
  }

  return {
    today,
    calendarRows,
    selectedDate,
    getNextMonth,
    getPrevMonth,
  }
};

export default useCalendar;