const express = require('express');

const router = express.Router();
const passport = require('./passport');
const auth = require('./auth');

router.get('/login', auth, (req, res) => {
  res.redirect('/admin');
});

router.get('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.redirect('/admin');
});

router.post('/login', (req, res, next) => {
  // eslint-disable-next-line
  passport.authenticate('local', (authErr, user) => {
    if (authErr) {
      return next(authErr);
    }
    if (!user) {
      return res.status(500).send('Укажите правильный логин или пароль!');
    }
    req.logIn(user, (logInErr) => {
      if (logInErr) {
        next(logInErr);
      }
      res.redirect('/admin');
    });
  })(req, res, next);
});

module.exports = router;
