require("dotenv").config()
const express = require("express")
const cors = require("cors")
const mongoose = require("mongoose")
const tagRouter = require("./routers/tag.router")
const recordRouter = require("./routers/record.router")
const config = require("./config")
const app = express()

if (!config.localMode)
  mongoose.connect(config.mongoDB.uri, { useNewUrlParser: true, useUnifiedTopology: true }) 

app.use(cors())
app.use(express.json())

app.use("/tags", tagRouter) 
app.use("/records", recordRouter)

app.get("/", (req, res) => res.status(200).json({ok: true}))

app.listen(config.host.port, () => console.log(`Running on port ${config.host.port}!`))