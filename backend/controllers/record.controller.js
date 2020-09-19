const RecordService = require("../services/record.service")

module.exports = {
  create: async(req, res) => {
    try {
      const { description, mood_id } = req.body
      const record = await RecordService.create({ description, mood_id })
      res.status(201).json({ id: record._id })
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  findAll: async(req, res) => {
    try {
      const records = await RecordService.findAll()
      res.status(200).json(records)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}