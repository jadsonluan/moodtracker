const Tag = require("../models/LocalTag")

module.exports = {
  create: async({ name, color }) => {
    if (!name) throw Error("name not provided")
    if (!color) throw Error("color not provided")

    try {
      const tag = Tag.create({ name, color })
      return tag
    } catch (error) {
      throw new Error(error.message)
    }
  },
  findAll: () => Tag.find()
}