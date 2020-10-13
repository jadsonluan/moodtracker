const Tag = require("./LocalTag")
const moods = []
let idCounter = 0

module.exports = {
  create: ({description, tag_id}) => {
    try {
      const tag = Tag.findById(tag_id)
      const id = ++idCounter
      const created_at = Date.now()
      moods[id] = { _id: id, description, tag, created_at }
      return moods[id]
    } catch (error) {
      throw Error(error.message)
    }
  },
  find: () => Object.values(moods)
}