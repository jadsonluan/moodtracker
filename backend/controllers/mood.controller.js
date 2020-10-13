const config = require("../config")
const MoodService = config.localMode ? require("../services/mood.local.service") : require("../services/mood.service")

module.exports = {
  create: async(req, res) => {
    try {
      const { description, tag_id } = req.body
      const mood = await MoodService.create({ description, tag_id })
      res.status(201).json(mood)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  },
  findAll: async(req, res) => {
    try {
      const moods = await MoodService.findAll()
      res.status(200).json(moods)
    } catch (error) {
      res.status(400).json({ error: error.message })
    }
  }
}