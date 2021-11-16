const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateReflection(data) {
  let errors = {};

  data.entry = validText(data.entry) ? data.entry : '';

  if (!Validator.isLength(data.entry, { max: 1000 })) {
    errors.entry = 'Entry is too long';
  }

  if (Validator.isEmpty(data.entry)) {
    errors.entry = 'Entry is required'
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
};
