const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MoodSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    mood: {
      type: Number,
      required: true
    }
  }, {
    timestamps: true
  }
);

const Mood = mongoose.model('moods', MoodSchema);
module.exports = Mood;
