const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReflectionSchema = new Schema(
  {
    user: {
      type:  Schema.Types.ObjectId,
      ref: 'users'
    },
    entry: {
      type: String,
      required: true
    }
  }, {
    timestamps: true
  }
);

const Reflection = mongoose.model('reflections', ReflectionSchema);
module.exports = Reflection;
