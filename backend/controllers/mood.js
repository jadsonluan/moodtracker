const { createMood, listMoods } = require("../services/mood.service.js")

module.exports = {
  create: (req, res) => {
    const { mood } = req.body

    if (mood) {
      const id = createMood(mood)
      res.status(200).json({ id })
    } else {
      res.status(400).json({error: "Mood missing on request body."})
    }
  },
  getAll: (req, res) => res.status(200).json(listMoods())
}