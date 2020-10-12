let idCount = 0
const moods = {}

module.exports = {
  create: (mood) => {
    let id = ++idCount
    const newMood = { id, ...mood }
    moods[id] = newMood
    return newMood
  },
  find: (search) => {
    const { id } = search
    if (!id) {
      return Object.values(moods)
    } else {
      return moods[id]
    }
  }
}