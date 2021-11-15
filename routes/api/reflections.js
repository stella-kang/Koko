const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Reflection = require('../../models/Reflection');
const validateReflection = require('../../validation/reflection');

router.get('/users/:userId', (req, res) => {
  Reflection.find({ user: req.params.userId })
    .sort({ date: -1 })
    .then(reflections => res.json(reflections))
    .catch(err => res.status(404).json({ noreflectionsfound: 'No reflections found for this user'}));
});

router.post('/users/:userId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateReflection(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    };

    const newReflection = new Reflection(
      {
        prompt: req.body.prompt,
        entry: req.body.entry,
        user: req.user.id
      }
    );

    newReflection
      .save()
      .then(reflection => res.json(reflection))
  }
)

module.exports = router;
