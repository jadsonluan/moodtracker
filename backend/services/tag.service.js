const config = require("../config")
const Tag = config.localMode ? require("../local/Tag") : require("../models/Tag")

module.exports = {
  create: async({ name, color }) => {
    if (!name) throw Error("name not provided")
    if (!color) throw Error("color not provided")

    try {
      const tag = await Tag.create({ name, color })
      return tag
    } catch (error) {
      throw new Error(error.message)
    }
  },
  findAll: async() => await Tag.find({})
}