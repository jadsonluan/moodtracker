const Tag = require("./LocalTag")
const moods = []
let idCounter = 0

module.exports = {
  create: ({description, tag_id}) => {
    try {
      const tag = Tag.findById(tag_id)
      const id = ++idCounter
      moods[id] = { id, description, tag }
      return moods[id]
    } catch (error) {
      throw Error(error.message)
    }
  },
  find: () => Object.values(moods)
}