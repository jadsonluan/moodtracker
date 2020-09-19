const MoodService = require("../services/mood.service.js")

module.exports = {
  create: async(req, res) => {
    try {
      const mood = await MoodService.create(req.body)
      res.status(201).json({ id: mood._id })
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  },
  findAll: async(req, res) => {
    try {
      const moods = await MoodService.findAll()
      res.status(200).json(moods)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
}