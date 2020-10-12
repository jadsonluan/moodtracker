const config = require("../config")
const Mood = config.localMode ? require("../local/Mood") : require("../models/Mood")

module.exports = {
  create: async({ name, color }) => {
    if (!name) throw Error("name not provided")
    if (!color) throw Error("color not provided")

    try {
      const mood = await Mood.create({ name, color })
      return mood
    } catch (error) {
      throw new Error(error.message)
    }
  },
  findAll: async() => await Mood.find({})
}