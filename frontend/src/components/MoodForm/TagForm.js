import React, { useState } from 'react';
import "./TagForm.css";
import Button from "./Button";

function TagForm(props) {
  const [color, setColor] = useState("#FFFFFF")
  const [name, setName] = useState("")
  const [errors, setErrors] = useState({ color: '', name: '' })

  const isHexColor = (value) => /^#[A-Fa-f0-9]{6}$/.test(value)

  const createTag = () => {
    if (isHexColor(color) && name !== "") {
      props.createTag({name,color})
      props.hide()
    } else {
      let colorMessage = isHexColor(color) ? "" : "A cor informada não é uma hex color.";
      let nameMessage = name === "" ? "O campo 'nome' é obrigatório." : ""
      setErrors({ name: nameMessage, color: colorMessage })
    }
  }

  const handleChange = (ev) => {
    const { name, value } = ev.target
    if (name === "name") {
      setName(value);
    } else if (name === "color") {
      setColor(value); 
    }
  }

  return (
    <div className="tagForm">
      <h3>Nova Tag</h3>

      <div className="errors">
        { <span>{errors.name}</span> }
        { <span>{errors.color}</span> }
      </div>

      <div className="tagInput">
        <input type="text" name="name" value={name} onChange={handleChange} placeholder="Nome"></input>
      </div>

      <div className="tagInput">
        <input type="text" name="color" value={color} onChange={handleChange}></input> 
      </div>

      <div className="buttons">
        <Button className="cancelBtn"onClick={props.hide} value="Cancelar"/>
        <Button className="createBtn" onClick={createTag} value="Criar"/>
      </div>
    </div>
  )
}

export default TagForm