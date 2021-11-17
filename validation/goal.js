const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateGoal(data) {
  let errors = {};

  data.description = validText(data.description) ? data.description : '';

  if (!Validator.isLength(data.description, { min: 3, max: 100 })) {
    errors.description = 'Description must be at least 3 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}
