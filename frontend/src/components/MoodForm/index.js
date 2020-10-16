import React, { useState } from 'react';
import { toast } from 'react-toastify';
import MoodTag from '../MoodTag';
import TagForm from './TagForm';
import Button from './Button';
import './MoodForm.css';

function MoodForm(props) {
  const [selectedTag, setSelectedTag] = useState(undefined);
  const [description, setDescription] = useState("");
  const [tagFormVisible, setTagFormVisible] = useState(false);

  const toggleVisibility = () => setTagFormVisible(!tagFormVisible)
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
  const handleChange = (event) => setDescription(event.target.value);

  const selectTag = (tag) => {
    const selected = selectedTag !== tag ? tag : undefined;
    setSelectedTag(selected);
  }

  return (
    <div className="form">
      <h2 className="title">Como você está?</h2>
      <div className="tags">
        { props.tags.map((tag, idx) => 
            <MoodTag 
              name={tag.name} 
              color={tag.color}
              key={idx} 
              onClick={() => selectTag(tag)}
              className={ selectedTag && selectedTag._id === tag._id ? "selected" : ""} 
            />
          )
        }

        <MoodTag name="+ tags" color="black" onClick={toggleVisibility}/>
      </div>

      { tagFormVisible ? 
        <TagForm createTag={props.createTag} hide={toggleVisibility}/> : undefined }
      
      <div className="why">
        <h3>Por quê?</h3>
        <input type="text" name="description" className="rounded-input" value={description} onChange={handleChange}/>
      </div>

      <div className="actions">
        <Button className="register-btn" value="Registrar" onClick={submit}/>
      </div>
    </div>
  );
}

export default MoodForm;