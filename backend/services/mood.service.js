const moods = []
let id = 0

module.exports = {
  createMood: ({ name, color }) => {
    if (!name) throw Error("Name is missing on Mood object.")
    if (!color) throw Error("Color is missing on Mood object.")
    // Validar se a color é hexcolor

    id++
    
    moods.push({
      id,
      name,
      color
    })

    return id
  },
  listMoods: () => moods
}