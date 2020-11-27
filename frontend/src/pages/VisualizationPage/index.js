import React, { useState } from "react";
import Button from "../../components/Button";
import GridVisualization from "../../components/GridVisualization";
import Calendar from "../../components/Calendar";
import FlowerVisualization from "../../components/FlowerVisualization";

import Caption from "../../components/Caption";

import "./VisualizationPage.css";

const Tabs = {
  CALENDAR: "calendar",
  GRID: "grid",
  FLOWER: "flower"
}

function VisualizationPage(props) {
  const [activeTab, setActiveTab] = useState(Tabs.CALENDAR)

  const renderActiveTab = () => {
    switch(activeTab) {
      case Tabs.GRID: return <GridVisualization/>;
      case Tabs.CALENDAR: return <Calendar/>;
      case Tabs.FLOWER: return <FlowerVisualization/>;
      default: return <GridVisualization/>;
    }
        
  }

  return (
    <div className="visualization-page">
      <div className="visualization-header">
        <h1>Visualizações</h1>
        <div className="buttons">
          { Object.values(Tabs)
            .map((tab, id) => {
              return (
                <Button 
                  value={tab} 
                  key={id} 
                  className={activeTab === tab ? "active" : "" }
                  onClick={() => setActiveTab(tab)}
                />
              )
            })
          }
        </div>
        <Caption/>
      </div>

      <div className="visualization">
        { renderActiveTab() }
      </div>
    </div>
  )
}

export default VisualizationPage;