import React, { createContext, useContext, useEffect, useState } from "react";
import MoodAPI from "../services/api";

const TagsContext = createContext();

export const useTags = () => useContext(TagsContext)

export default function TagsProvider({children}) {
  const [tags, setTags] = useState([])

  useEffect(() => {
    MoodAPI.tags.findAll()
      .then(({data}) => setTags(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <TagsContext.Provider value={ { tags, setTags } }>
      {children}
    </TagsContext.Provider>
  )
}