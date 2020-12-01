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

  return (
    <TagsContext.Provider value={ { tags, setTags } }>
      {children}
    </TagsContext.Provider>
  )
}