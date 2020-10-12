const tags = []
let idCounter = 0

module.exports = {
  create: ({name, color}) => {
    const id = ++idCounter
    tags[id] = { id, name, color }
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