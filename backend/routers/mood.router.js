const express = require("express")
const MoodController = require("../controllers/mood.controller")

const router = express.Router()

router.post("/", MoodController.create)
router.get("/", MoodController.findAll)

module.exports = router