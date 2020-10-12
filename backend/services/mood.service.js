const Mood = require("../models/Mood")

module.exports = {
  create: async({description, tag_id}) => {
    if (!description) throw new Error("description not provided")
    if (!tag_id) throw new Error("tag id not provided")

    try {
      return await Mood.create({description, tag: tag_id})
    } catch (error) {
      throw new Error(error.message)
    }
  },
  findAll: async() => await Mood.find({}).populate("tag")
}