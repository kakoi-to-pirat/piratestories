const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const userDB = {
  id: 136345,
  username: 'tigr',
  password: '200',
};

passport.serializeUser((user, done) => done(null, user.id));
passport.deserializeUser((id, done) => done(null, userDB.id === id && userDB));

passport.use(new LocalStrategy(
  { usernameField: 'username' },
  (username, password, done) =>
    username === userDB.username && password === userDB.password
      ? done(null, userDB)
      : done(null, false)
));

module.exports = passport;
