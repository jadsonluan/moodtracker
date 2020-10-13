const tags = []
let idCounter = 0

module.exports = {
  create: ({name, color}) => {
    const id = ++idCounter
    const created_at = Date.now()
    tags[id] = { _id: id, name, color, created_at }
    return tags[id]
  },
  find: () => Object.values(tags),
  findById: (id) => {
    if (tags[id]) {
      return tags[id]
    } else {
      throw Error("tag not found")
    }
  }
}