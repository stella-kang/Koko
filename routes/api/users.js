const express = require('express');
const router = express.Router();
const passport = require('passport');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const keys = require('../../config/keys');
const User = require('../../models/User');
const Reflection = require('../../models/Reflection');
const Goal = require('../../models/Goal');
const Mood = require('../../models/Mood');

const validateRegisterInput = require('../../validation/register');
const validateLoginInput = require('../../validation/login');

router.get('/current', passport.authenticate('jwt', {session: false}), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email,
    friendshipExp: req.user.friendshipExp,
    friendshipLvl: req.user.friendshipLvl
  });
})

router.post('/register', (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username }).then((user) => {
    if (user) {
      errors.username = 'Username is already taken';
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then((user) => {
              const payload = {
                id: user.id,
                username: user.username,
                friendshipExp: user.friendshipExp,
                friendshipLvl: user.friendshipLvl
              };

              jwt.sign(
                payload,
                keys.secretOrKey,
                { expiresIn: 3600 },
                (err, token) => {
                  res.json({
                    success: true,
                    token: 'Bearer ' + token,
                  });
                }
              );
            })
            .catch((err) => console.log(err));
        });
      });
    }
  });
});

router.post('/login', (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then((user) => {
    if (!user) {
      errors.email = 'This email does not have an account associated with it';
      return res.status(400).json(errors);
    }

    bcrypt.compare(password, user.password).then((isMatch) => {
      if (isMatch) {
        const payload = {
          id: user.id,
          username: user.username,
          friendshipExp: user.friendshipExp,
          friendshipLvl: user.friendshipLvl };

        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: 'Bearer ' + token,
            });
          }
        );
      } else {
        errors.password = 'Invalid password';
        return res.status(400).json(errors);
      }
    });
  });
});

router.get('/:userId/history/:date', async (req, res) => {
  const startQueryDate = new Date(req.params.date);
  const endQueryDate = new Date(req.params.date);

  endQueryDate.setDate(endQueryDate.getDate() + 1);

  const mood = await Mood.find(
    {
      user: req.params.userId,
      createdAt:
        {
          $gte: startQueryDate,
          $lt: endQueryDate
        }
    }
  )

  const goal = await Goal.find(
    {
      user: req.params.userId,
      createdAt:
        {
          $gte: startQueryDate,
          $lt: endQueryDate
        }
      }
  )
  .sort({ createdAt: 1 })

  const reflection = await Reflection.find(
    {
      user: req.params.userId,
      createdAt:
      {
        $gte: startQueryDate,
        $lt: endQueryDate
      }
    }
  )
  .sort({ createdAt: 1 })

  res.json(
    {
      mood,
      goal,
      reflection
    }
  )
});

router.patch('/:userId/friendship',
  async (req, res) => {

    try {
      const user = await User.findById(req.params.userId)

      const xpToLevel = user.friendshipLvl * 5;
      user.friendshipExp += parseInt(req.body.exp);

      if (user.friendshipExp >= xpToLevel) {
        user.friendshipExp = user.friendshipExp - xpToLevel;
        user.friendshipLvl += 1;
      };

      await user.save();
      res.json({
        id: user.id,
        username: user.username,
        email: user.email,
        friendshipExp: user.friendshipExp,
        friendshipLvl: user.friendshipLvl
      });

    } catch {
      res.status(404);
      res.send({ error: "No user found!" });
    }
  }
);

module.exports = router;
