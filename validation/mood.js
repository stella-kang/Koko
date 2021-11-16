const Validator = require('validator');

module.exports = function validateMood(data) {
  let errors = {};

  if (!data.mood) {
    errors.mood = 'Mood is required';
  }
  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
};
