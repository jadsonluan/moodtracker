const { Schema, model } = require("mongoose")

const Mood = new Schema({
  name: { 
    type: String, 
    required: true 
  },
  color: { 
    type: String, 
    required: true
  }
})

module.exports = model("Mood", Mood)