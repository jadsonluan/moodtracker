import React from 'react';
import MoodFlower from './MoodFlower';
import { 
  findMoodsByDay, 
  findMoodsByMonth, 
  monthNames, 
  numberOfDays 
} from "../../utils/mood-filter"
import { useMoods } from "../../context/MoodContext";
import "./FlowerVisualization.css";

function FlowerVisualization(props) {
  const { moods } = useMoods();

  const today = new Date();
  const month = today.getMonth();
  const year = today.getFullYear();
  const monthSize = numberOfDays(month, year);
  const days = [...new Array(monthSize)].map((_, i) => i + 1);
  const monthMoods = findMoodsByMonth(moods, today);

  return (
    <div className="flower-visualization">
      <h1>{`${monthNames[month]}/${year}`}</h1>
      <div className="flower-visualization-content">
        { monthMoods.map(mood => <MoodFlower key={mood._id} mood={mood}/>)}
      </div>
      <div className="credits">Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
    </div>
  )
}

export default FlowerVisualization;