let idCount = 0
const tags = {}

module.exports = {
  create: (tag) => {
    let id = ++idCount
    const newTag = { id, ...tag }
    tags[id] = newTag
    return newTag
  },
  find: (search) => {
    const { id } = search
    if (!id) {
      return Object.values(tags)
    } else {
      return tags[id]
    }
  }
}