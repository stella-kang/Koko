const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Goal = require('../../models/Goal');
const validateGoal = require('../../validation/goal');

router.get('/users/:userId',
  async (req, res) => {
    try {
      const goals = await Goal.find({ user: req.params.userId })
        .sort({ createdAt: 1 })

      res.json(goals);

    } catch {
      res.status(404);
      res.json({ error: "No goals yet!" });
    }
});

router.post('/users/:userId',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
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

    await newGoal.save();
    res.json(newGoal);
  }
);

router.patch('/:goalId',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {

    try {
      const editedGoal = await Goal.findOne({ goal: req.params.goalId })

      editedGoal.description = req.body.description;
      editedGoal.dueDate = req.body.dueDate;
      editedGoal.status = req.body.status;

      await editedGoal.save();
      res.json(editedGoal);

    } catch {
      res.status(404);
      res.send({ error: "Goal doesn't exist!" });
    }
  }
);

module.exports = router;
