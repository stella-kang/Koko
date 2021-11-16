const express = require('express');
const router = express.Router();
const passport = require('passport');
const Reflection = require('../../models/Reflection');
const validateReflection = require('../../validation/reflection');

router.get('/users/:userId',
  async (req, res) => {

    try {
      const reflections = await Reflection.find({ user: req.params.userId })
        .sort({ createdAt: 1 })

      res.json(reflections);

    } catch {
      res.status(404);
      res.json({ error: "No reflections to display!" });
    }
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
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

    await newReflection.save();
    res.json(newReflection);
  }
);

router.patch('/:reflectionId',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    const { errors, isValid } = validateReflection(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    };

    try {
      const editedReflection = await Reflection.findById(req.params.reflectionId)

      if (req.body.entry) editedReflection.entry = req.body.entry;

      await editedReflection.save();
      res.json(editedReflection);

    } catch {
      res.status(404);
      res.json({ error: "Reflection doesn't exist!" });
    }
  }
);

router.delete('/:reflectionId',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {

    try {
      await Reflection.deleteOne({ _id: req.params.reflectionId });
      res.json({ success: "Successfully deleted!" });

    } catch {
      res.status(404);
      res.json({ error: "Reflection doesn't exist!" });
    }
  }
);

module.exports = router;
