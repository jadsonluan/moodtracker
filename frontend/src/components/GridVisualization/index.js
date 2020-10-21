import React from "react";
import GridCell from "./GridCell";
import "./GridVisualization.css";

export default function GridVisualization({moods}) {
  const _moods = [
    { tag: { name: 'feliz', color: "green" }},
    { tag: { name: 'feliz', color: "deepskyblue" }},
    { tag: { name: 'feliz', color: "green" }},
    { tag: { name: 'feliz', color: "red" }},
    { tag: { name: 'feliz', color: "deepskyblue" }},
    { tag: { name: 'feliz', color: "deepskyblue" }},
    { tag: { name: 'feliz', color: "red" }}
  ]
  return (
    <div className="grid-visualization">
      { _moods.map((mood, id) => <GridCell mood={mood}/>)}
    </div>
  )
}