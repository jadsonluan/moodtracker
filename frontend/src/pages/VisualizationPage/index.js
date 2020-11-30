import React, { useState } from "react";
import Button from "../../components/Button";
import GridVisualization from "../../components/GridVisualization";
import Calendar from "../../components/Calendar";
import FlowerVisualization from "../../components/FlowerVisualization";

import Caption from "../../components/Caption";

import "./VisualizationPage.css";

const Tabs = {
  CALENDAR: { 
    name: "Calendário", 
    description: "Essa visualização permite analisar seu humor durante um mês específico. O humor (tag) mostrado no calendário é o que foi mais frequente naquele dia. Se houver empate de ocorrência, todos os que empataram serão exibidos."
  },
  GRID: { 
    name: "Grid",
    description: "Essa visualização permite analisar seu humor durante o ano atual. O humor (tag) mostrado na célula do grid é o que foi mais frequente naquele dia. Se houver empate de ocorrência, apenas dois deles serão exibidos."
  },
  FLOWER: { 
    name: "Flores",
    description: "Essa visualização permite analisar seu humor durante o mês atual. Todos os registros de humor são exibidos."
  }
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
                  value={tab.name} 
                  key={id} 
                  className={activeTab === tab ? "active" : "" }
                  onClick={() => setActiveTab(tab)}
                />
              )
            })
          }
        </div>
        <div className="visualization-info">
          <b>Descrição</b>
          <p>{activeTab.description}</p>  
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