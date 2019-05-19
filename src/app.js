const express = require('express');
const session = require('./auth/session');
const passport = require('./auth/passport');
const auth = require('./auth/auth');
const authRouter = require('./auth/routes');

const app = express();

const createApp = async () => {
  app.use(express.urlencoded({ extended: false }));
  app.use(session);
  app.use(passport.initialize());
  app.use(passport.session());
  app.use('/', authRouter);

  app.get('/', (req, res) => {
    res.status(200).sendFile('client/index.html', { root: __dirname });
  });

  app.get('/admin', auth, (req, res) => {
    res.status(200).sendFile('/admin/index.html', { root: __dirname });
  });

  app.use((req, res) => {
    res.status(404).json({
      message: `No route found for "${req.method} ${req.url}"`,
    });
  });

  app.use((err, req, res) => {
    console.error(err.stack); // eslint-disable-line no-console
    res.status(500).json({ error: err });
  });

  return app;
}

module.exports = createApp;
