const express = require('express');
const router = express.Router();
const passport = require('passport');
const Mood = require('../../models/Mood');
const validateMood = require('../../validation/mood');

router.get('/users/:userId',
  async (req, res) => {

    try {
      const moods = await Mood.find({ user: req.params.userId })

      res.json(moods);

    } catch {
      res.status(404);
      res.json({ errors: "No moods to display!" })
    }
  }
)

router.post('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateMood(req.body);

    if (!isValid) {
      return res.status(400).json.apply(errors);
    };

    const newMood = new Mood(
      {
        mood: req.body.mood,
        user: req.body.userId
      }
    );

    await newMood.save();
    res.json(newMood);
  }
);

router.patch('/:moodId',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {

    try {
      const editedMood = await Mood.findById(req.params.moodId)
      if (req.body.mood) editedMood.mood = req.body.mood;
      await editedMood.save();
      res.json(editedMood);

    } catch {
      res.status(404);
      res.send({ error: "Mood doesn't exist!" });
    }
  }
);

module.exports = router;
