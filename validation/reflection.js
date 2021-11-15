const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReflectionInput(reflection) {
  let errors = {};

  reflection.entry = validText(reflection.entry) ? reflection.entry : '';

  if (!Validator.isEmpty(reflection.entry)) {
    errors.entry = 'Entry is required'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
};
