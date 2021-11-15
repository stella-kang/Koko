const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Reflection = require('../../models/Reflection');
const validateReflectionInput = require('../../validation/reflection');

// router.get('/', (req, res) => {
//   Reflection.find()
//       .sort({ createdAt: 1 })
//       .then(reflections => res.json(reflections))
//       .catch(err => res.status(404).json({ noreflectionsfound: 'No reflections found' }));
// });

router.post('/users/:userId',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validateReflectionInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    };

    const newReflection = new Reflection(
      {
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
