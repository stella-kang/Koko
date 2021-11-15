const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Mood = require('../../models/Mood');
const validateMood = require('../../validation/mood');

router.post('/users/:userId',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateMood(req.body);

    if (!isValid) {
      return res.status(400).json.apply(errors);
    };

    const newMood = new Mood(
      {
        mood: req.body.mood,
        user: req.user.id
      }
    );

    await newMood.save();
    res.json(newMood);
  }
);

router.patch('/:moodId',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {

    const editedMood = await Mood.findOne({ mood: req.params.moodId })

    editedMood.mood = req.body.mood;

    editedMood
      .save()
      .then(mood => res.json(mood))
  }
);

module.exports = router;
