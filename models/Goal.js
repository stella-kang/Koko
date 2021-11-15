const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const GoalSchema = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'users'
    },
    description: {
      type: String,
      required: true
    },
    dueDate: {
      type: Date
    },
    status: {
      type: Boolean,
      required: true,
      default: false
    }
  }, {
    timestamps: true
  }
);

const Goal = mongoose.model('goals', GoalSchema);
module.exports = Goal;
