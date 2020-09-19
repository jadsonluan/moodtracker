require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const moodRouter = require("./routers/mood.router")
const recordRouter = require("./routers/record.router")
const config = require("./config")
const app = express()

mongoose.connect(config.mongoDB.uri, { useNewUrlParser: true, useUnifiedTopology: true })

app.use(cors())
app.use(express.json())

app.use("/moods", moodRouter) 
app.use("/records", recordRouter)

app.get("/", (req, res) => res.status(200).json({ok: true}))

app.listen(config.host.port, () => console.log(`Running on port ${config.host.port}!`))