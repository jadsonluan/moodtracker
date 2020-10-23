import React, { createContext, useContext, useEffect, useState } from "react";
import MoodAPI from "../services/api";

const MoodsContext = createContext();

export const useMoods = () => useContext(MoodsContext)

export default function MoodsProvider({children}) {
  const [moods, setMoods] = useState([])

  useEffect(() => {
    MoodAPI.moods.findAll()
      .then(({data}) => setMoods(data))
      .catch(error => console.log(error))
  }, [])

  return (
    <MoodsContext.Provider value={ { moods, setMoods } }>
      {children}
    </MoodsContext.Provider>
  )
}