import React, { createContext, useContext, useEffect, useState } from "react";
import TagAPI from "../services/tag.service";

const TagsContext = createContext();

export const useTags = () => useContext(TagsContext)

export default function TagsProvider({children}) {
  const [tags, setTags] = useState([])

  useEffect(() => {
    TagAPI.findAll()
      .then(({data}) => setTags(data))
      .catch(error => console.log(error))
  }, [])

  const createTag = ({ name, color }) => {
    TagAPI.create({ name, color })
      .then(({data}) => {
        const tag = { ...data }
        setTags([...tags, tag]);
      })
      .catch(console.log)
  }

  return (
    <TagsContext.Provider value={ { tags, createTag } }>
      {children}
    </TagsContext.Provider>
  )
}