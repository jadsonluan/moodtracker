const express = require('express')
const cors = require('cors')
const moodRouter = require('./routes/mood')

const app = express()

app.use(cors())
app.use(express.json())
app.use('/moods', moodRouter) 

app.get('/', (req, res) => res.status(200).json({ok: true}))
app.listen(3000, () => console.log('Running on port 3000!'))