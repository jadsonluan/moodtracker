const config = require("../config")
const Record = config.localMode ? require("../local/Record") : require("../models/Record")

module.exports = {
  create: async({description, mood_id}) => {
    if (!description) throw new Error("description not provided")
    if (!mood_id) throw new Error("mood id not provided")

    try {
      return await Record.create({description, mood: mood_id})
    } catch (error) {
      throw new Error(error.message)
    }
  },
  findAll: async() => await Record.find({}).populate("mood")
}