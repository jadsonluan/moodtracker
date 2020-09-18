const { createMood, listMoods } = require("../services/mood.service.js")

module.exports = {
  create: async(req, res) => {
    try {
      const mood = await createMood(req.body)
      res.status(201).json(mood)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  },
  getAll: async(req, res) => res.status(200).json(await listMoods())
}