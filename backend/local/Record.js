let idCount = 0
const records = {}

module.exports = {
  create: (record) => {
    let id = ++idCount
    const newMood = { id, ...record }
    records[id] = newMood
    return newMood
  },
  find: (search) => {
    const { id } = search
    if (!id) {
      return Object.values(records)
    } else {
      return records[id]
    }
  }
}