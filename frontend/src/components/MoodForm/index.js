import React, { useState } from 'react';
import MoodTag from '../MoodTag';
import Button from './Button';
import './MoodForm.css';

const testTag = { name: 'Test', color: 'purple' };

function MoodForm(props) {
  const [selectedTag, setSelectedTag] = useState(undefined);
  const [description, setDescription] = useState("");

  const addTag = () => props.createTag(testTag);
  const submit = () => props.createMood({ description, tag: selectedTag });
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
              className={ selectedTag && selectedTag.id === tag.id ? "selected" : ""} 
            />
          )
        }

        <MoodTag name="+ tags" color="black" onClick={addTag}/>
      </div>
      
      <div className="why">
        <h3>Por quê?</h3>
        <input type="text" name="description" value={description} onChange={handleChange}/>
      </div>

      <div className="actions">
        <Button className="register-btn" value="Registrar" onClick={submit}/>
      </div>
    </div>
  );
}

export default MoodForm;