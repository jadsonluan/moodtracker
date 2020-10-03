import React from "react";
import "./MainPage.css";
import MoodRecordList from "../../components/MoodRecordList";

function MainPage(props) {
  return (
    <div className="main-page">
      <h1>Seus últimos registros</h1>
      <MoodRecordList moods={props.moods} />
    </div>
  )
}

export default MainPage;