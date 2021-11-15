const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Mood = require('../../models/Mood');
const validateMood = require('../../validation/Mood');

router.post('/users/:userId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
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

    newMood
      .save()
      .then(mood => res.json(mood))
  }
)

module.exports = router;
