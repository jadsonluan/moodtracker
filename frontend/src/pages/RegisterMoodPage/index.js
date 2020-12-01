import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import Button from "../../components/Button";
import TagSelect from '../../components/TagSelect';
import TagForm from '../../components/TagForm';

import { useMoods } from '../../context/MoodContext';
import { useTags } from '../../context/TagContext';

import "./RegisterMoodPage.css";

export default function RegisterMoodPage(props) {
  const [selectedTag, setSelectedTag] = useState(undefined)
  const [description, setDescription] = useState("");
  const [tagFormVisibility, setTagFormVisibility] = useState(false)
  const {moods, createMood} = useMoods()
  const {tags, createTag} = useTags()
  
  const selectTag = (tag) => setSelectedTag(tag)
  const toggleFormVisibility = () => setTagFormVisibility(!tagFormVisibility)
  const handleChange = (event) => setDescription(event.target.value);

  const submit = () => {
    if (selectedTag === undefined) {
      toast.error("Tag não selecionada")
    } else if (!description) {
      toast.error("Descrição não informada")
    } else if (description.length > 64) {
      toast.error("Descrição muito longa. (Limite: 64 caracteres)")
    } else {
      createMood({ description, tag: selectedTag });
      toast.success("Humor registrado com sucesso!")
      props.history.push("/");
    }
  }

  return (
    <div className="register-mood-page">
      <h2 className="title">Como você está?</h2>

      <TagSelect tags={tags} selected={selectedTag} selectTag={selectTag}/>
      <Button value="Criar tag" className="create-tag-btn btn" onClick={toggleFormVisibility}/>

      <div className="tag-form-container">
        { tagFormVisibility ? <TagForm createTag={createTag} hide={toggleFormVisibility}/> : undefined }
      </div>

      <div className="why">
        <h3>Por quê?</h3>
        <input type="text" name="description" className="rounded-input" value={description} onChange={handleChange} placeholder="Breve descrição do seu humor"/>
      </div>

      <Button className="register-btn btn" value="Registrar" onClick={submit}/> 
    </div>
  );
}