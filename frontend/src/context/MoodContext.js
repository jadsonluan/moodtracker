import React, { createContext, useContext, useEffect, useState } from "react";
import MoodAPI from "../services/mood.service";

const MoodsContext = createContext();

export const useMoods = () => useContext(MoodsContext)

export default function MoodsProvider({children}) {
  const [moods, setMoods] = useState([])

  useEffect(() => {
    MoodAPI.findAll()
      .then(({data}) => setMoods(data))
      .catch(error => console.log(error))
  }, [])

  const createMood = ({description, tag}) => {
    MoodAPI.create({ description, tag_id: tag._id })
      .then(({data}) => {
        const mood = { ...data }
        setMoods([...moods, mood]);
      })
      .catch(console.log)
  }

  return (
    <MoodsContext.Provider value={ { moods, createMood } }>
      {children}
    </MoodsContext.Provider>
  )
}