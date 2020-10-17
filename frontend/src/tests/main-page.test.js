import React from "react";
import { render, fireEvent } from '@testing-library/react'
import MainPage from "../pages/MainPage";

const happyTag = {
  "_id": 1,
  "name": "feliz",
  "color": "#00ff00",
  "created_at": 1602877162065
}

const moods = [
  {
    "_id": 1,
    "description": "acabei o projeto de IA",
    "tag": happyTag,
    "created_at": 1602877320061
  },
  {
    "_id": 2,
    "description": "fui elogiado pelo mentor",
    "tag": happyTag,
    "created_at": 1602877320061
  }
]

const setup = (props) => {
  const { container } = render(<MainPage {...props}/>)
  const input = container.querySelector("[name=search]")
  const moodRecordList = container.querySelector(".mood-record-list")
  return {
    input,
    moodRecordList,
    ...container
  }
}

test("it should not show a mood list when the moods prop is empty", () => {
  const { moodRecordList } = setup({ moods: [] })
  expect(moodRecordList.children.length).toBe(0)
})

test("it should show a mood list with the same length of the moods prop", () => {
  const { moodRecordList } = setup({ moods })
  expect(moodRecordList.children.length).toBe(moods.length)
})

test('it should show an empty list if the search text has no match', () => {
  const { input, moodRecordList } = setup({ moods })
  const searchText = "dev web"
  fireEvent.change(input, { target: { value: searchText} })
  expect(moodRecordList.children.length).toBe(0)
})

test("it should list the only mood with 'projeto' in the description or tag name", () => {
  const { input, moodRecordList } = setup({ moods })
  const { children } = moodRecordList
  fireEvent.change(input, { target: { value: 'projeto' } })
  for (let i = 0; i < children.length; i++)
    expect(children[i].textContent.includes('projeto'))
  expect(children.length).toBe(1)
})

test("it should list the two moods with 'feliz' in the description or tag name", () => {
  const { input, moodRecordList } = setup({ moods })
  const { children } = moodRecordList
  fireEvent.change(input, { target: { value: 'feliz' } })
  for (let i = 0; i < children.length; i++)
    expect(children[i].textContent.includes('feliz'))
  expect(children.length).toBe(2)
})