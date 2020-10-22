import React, { useState } from "react";
import "./MainPage.css";
import MoodRecordList from "../../components/MoodRecordList";
import { useMoods } from "../../context/MoodContext";

function MainPage(props) {
  const [search, setSearch] = useState("");
  const { moods } = useMoods();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "search") {
      setSearch(value);
    }
  }

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
      <MoodRecordList moods={moods} searchFor={search} />
    </div>
  )
}

export default MainPage;