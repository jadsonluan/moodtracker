import React, { useState } from 'react';
import { toast } from 'react-toastify';
import Button from "../Button";
import "./TagForm.css";

function TagForm(props) {
  const [color, setColor] = useState("#FFFFFF")
  const [name, setName] = useState("")

  const isHexColor = (value) => /^#[A-Fa-f0-9]{6}$/.test(value)

  const createTag = () => {
    if (!isHexColor(color)) {
      toast.error("A cor informada não é uma cor hex. (Formato: #FFFFFF)");
    } else if (!name) {
      toast.error("O campo 'nome' é obrigatório.");
    } else {
      props.createTag({name,color})
      props.hide()
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

      <div className="tagInput">
        <input type="text" name="name" value={name} className="rounded-input" onChange={handleChange} placeholder="Nome"></input>
      </div>

      <div className="tagInput">
        <input type="text" name="color" value={color} className="rounded-input" onChange={handleChange}></input> 
      </div>

      <div className="buttons">
        <Button className="cancelBtn" onClick={props.hide} value="Sair"/>
        <Button className="createBtn" onClick={createTag} value="Criar"/>
      </div>
    </div>
  )
}

export default TagForm