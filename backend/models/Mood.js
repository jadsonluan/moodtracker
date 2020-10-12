const { Schema, model } = require("mongoose")

const Mood = new Schema(
  {
    description: {
      type: String,
      required: true
    },
    mood: {
      type: Schema.Types.ObjectId,
      ref: "Mood",
      required: true
    }
  },
  { timestamps: { createdAt: true, updatedAt: false }}
)

module.exports = model("Mood", Mood)