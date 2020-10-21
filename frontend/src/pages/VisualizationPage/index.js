import React from "react";
import Button from "../../components/Button";
import GridVisualization from "../../components/GridVisualization";
import "./VisualizationPage.css";

function VisualizationPage({ moods }) {
  return (
    <div className="visualization-page">
      <h1>Visualizações</h1>
      <div className="buttons">
        <Button value="grid" className="active"/>
        <Button value="calendario"/>
        <Button value="flor"/>
      </div>
      <div className="visualization">
        <GridVisualization moods={moods}/>
      </div>
    </div>
  )
}

export default VisualizationPage;