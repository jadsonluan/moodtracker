import React, { useState } from "react";
import "./MainPage.css";
import MoodRecordList from "../../components/MoodRecordList";
import { useMoods } from "../../context/MoodContext";

function MainPage(props) {
  const [search, setSearch] = useState("");
  const { moods } = useMoods();
  let filteredMoods = moods.sort((mood1, mood2) => mood1.created_at < mood2.created_at);

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "search") {
      setSearch(value);
    }
  }

  filteredMoods = moods.filter(mood => mood.description.includes(search) || mood.tag.name.includes(search))

  return (
    <div className="main-page">
      <h1>Seus últimos registros</h1>
      <input 
        type="text" 
        name="search" 
        className="rounded-input"
        value={search} 
        onChange={handleChange} 
        placeholder="Filtrar por... (tag ou descrição)"/>
      <MoodRecordList moods={filteredMoods}/>
    </div>
  )
}

export default MainPage;