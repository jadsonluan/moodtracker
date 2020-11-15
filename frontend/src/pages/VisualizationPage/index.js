import React, { useState } from "react";
import Button from "../../components/Button";
import GridVisualization from "../../components/GridVisualization";
import CalendarVisualization from "../../components/CalendarVisualization";
import BaloonVisualization from "../../components/BaloonVisualization";
import "./VisualizationPage.css";

const Tabs = {
  GRID: "grid",
  CALENDAR: "calendar",
  BALOON: "baloon"
}

function VisualizationPage(props) {
  const [activeTab, setActiveTab] = useState("grid")

  const renderActiveTab = () => {
    switch(activeTab) {
      case Tabs.GRID: return <GridVisualization/>;
      case Tabs.CALENDAR: return <CalendarVisualization/>;
      case Tabs.BALOON: return <BaloonVisualization/>;
      default: return <GridVisualization/>;
    }
        
  }

  return (
    <div className="visualization-page">
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

      <div className="visualization">
        { renderActiveTab() }
      </div>
    </div>
  )
}

export default VisualizationPage;