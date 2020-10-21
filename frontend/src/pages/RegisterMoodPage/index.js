import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

import MoodAPI from "../../services/api";
import Button from "../../components/Button";
import TagSelect from '../../components/TagSelect';
import TagForm from '../../components/TagForm';

import "./RegisterMoodPage.css";

export default function RegisterMoodPage(props) {
  const [tags, setTags] = useState([])
  const [selectedTag, setSelectedTag] = useState(undefined)
  const [description, setDescription] = useState("");
  const [tagFormVisibility, setTagFormVisibility] = useState(false)
  
  const selectTag = (tag) => setSelectedTag(tag)
  const toggleFormVisibility = () => setTagFormVisibility(!tagFormVisibility)
  const handleChange = (event) => setDescription(event.target.value);

  const createTag = ({ name, color }) => {
    MoodAPI.tags.create({ name, color })
      .then(({data}) => {
        const tag = { ...data }
        setTags([...tags, tag]);
      })
      .catch(console.log)
  }

  const submit = () => {
    if (selectedTag === undefined) {
      toast.error("Tag não selecionada")
    } else if (!description) {
      toast.error("Descrição não informada")
    } else {
      props.createMood({ description, tag: selectedTag });
      toast.success("Humor registrado com sucesso!")
      props.history.push("/");
    }
  }

  useEffect(() => {
    MoodAPI.tags.findAll()
      .then(({data}) => setTags(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <div className="register-mood-page">
      <h2 className="title">Como você está?</h2>

      <TagSelect tags={tags} selected={selectedTag} selectTag={selectTag}/>
      <Button value="Criar tag" className="create-tag-btn btn" onClick={toggleFormVisibility}/>

      { tagFormVisibility ? <TagForm createTag={createTag} hide={toggleFormVisibility}/> : undefined }

      <div className="why">
        <h3>Por quê?</h3>
        <input type="text" name="description" className="rounded-input" value={description} onChange={handleChange}/>
      </div>

      <Button className="register-btn btn" value="Registrar" onClick={submit}/> 
    </div>
  );
}