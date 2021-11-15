const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateGoal(data) {
  let errors = {};

  data.description = validText(data.description) ? data.description : '';
  data.dueDate = validText(data.dueDate) ? data.dueDate : '';

  if (!Validator.isLength(data.description, { min: 3, max: 100 })) {
    errors.description = 'Description must be at least 3 characters';
  }

  if (Validator.isEmpty(data.description)) {
    errors.description = 'Description field is required';
  }

  if (!(data.status === 'TRUE' || data.status === 'FALSE')) {
    errors.status = 'Status must be either true/false';
  }

  if (!Validator.isDate(data.dueDate)) {
    errors.dueDate = 'Due date must be a valid date';
  }

  if (Validator.isEmpty(data.dueDate)) {
    delete errors.dueDate;
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
}
