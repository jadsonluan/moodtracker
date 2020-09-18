const Mood = require("../models/Mood")

module.exports = {
  createMood: async({ name, color }) => {
    if (!name) throw Error("name not provided")
    if (!color) throw Error("color not provided")

    try {
      const mood = await Mood.create({ name, color })
      return mood
    } catch (error) {
      throw new Error(error.message)
    }
  },
  listMoods: async() => await Mood.find({})
}