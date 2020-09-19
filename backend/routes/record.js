const express = require("express")
const RecordController = require("../controllers/record")
const router = express.Router()

router.post("/", RecordController.create)
router.get("/", RecordController.findAll)

module.exports = router