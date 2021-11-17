const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema(
  {
    username: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    friendshipLvl: {
      type: Number,
      required: true,
      default: 1
    },
    friendshipExp: {
      type: Number,
      required: true,
      default: 0
    }
  }, {
    timestamps: true
  }
);

const User = mongoose.model('users', UserSchema);
module.exports = User;
