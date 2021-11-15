const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Goal = require('../../models/Goal');
const validateGoal = require('../../validation/goal');

router.get('/users/:userId', (req, res) => {
  Goal.find({ user: req.params.userId })
    .sort({ date: -1 })
    .then(goals => res.json(goals))
    .catch(err => res.status(404).json({ nogoalsfound: 'No goals found for this user'}));
});

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
);

router.patch('/:goalId',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {

    const editedGoal = await Goal.findOne({ goal: req.params.goalId })

    editedGoal.description = req.body.description;
    editedGoal.dueDate = req.body.dueDate;
    editedGoal.status = req.body.status;

    editedGoal
      .save()
      .then(goal => res.json(goal))
  }
);

module.exports = router;
