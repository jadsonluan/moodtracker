const Mood = require("../models/LocalMood")

module.exports = {
  create: ({description, tag_id}) => {
    if (!description) throw new Error("description not provided")
    if (!tag_id) throw new Error("tag id not provided")

    try {
      return Mood.create({description, tag_id})
    } catch (error) {
      throw new Error(error.message)
    }
  },
  findAll: () => Mood.find()
}