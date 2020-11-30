import React from "react";
import MoodsProvider from "./MoodContext";
import TagsProvider from "./TagContext";

export default function MainProvider({children}) {
  return (
    <MoodsProvider>
      <TagsProvider>
        {children}
      </TagsProvider>
    </MoodsProvider>
  )
}