const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Goal = require('../../models/Goal');
const validateGoal = require('../../validation/goal');

router.post('/users/:userId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateGoal(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    };

    const newGoal = new Goal(
      {
        description: req.body.description,
        dueDate: req.body.dueDate,
        status: req.body.status,
        user: req.user.id
      }
    );

    newGoal
      .save()
      .then(goal => res.json(goal))
  }
)

module.exports = router;
