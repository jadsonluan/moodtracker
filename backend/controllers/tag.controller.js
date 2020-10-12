const config = require("../config")
const TagService = config.localMode ? require("../services/tag.local.service") : require("../services/tag.service")

module.exports = {
  create: async(req, res) => {
    try {
      const tag = await TagService.create(req.body)
      res.status(201).json({ id: tag._id })
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  },
  findAll: async(req, res) => {
    try {
      const tags = await TagService.findAll()
      res.status(200).json(tags)
    } catch (error) {
      res.status(400).json({error: error.message})
    }
  }
}