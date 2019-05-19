require('dotenv').config();

const createApp = require('./app');
const { db } = require('./db');

const PORT = process.env.PORT || process.env.LOCAL_PORT || 3001;

createApp()
  .then(app => {
    db
    .sync()
      .then(() => {
        console.info('Connection to the database has been established successfully.'); // eslint-disable-line no-console
        app.listen(PORT, () => {
          console.info(`Pirate stories running at ${PORT} port`); // eslint-disable-line no-console
        });
      })
      .catch(err => {
        console.info('Unable to connect to the database:', err); // eslint-disable-line no-console
      });
  })
  .catch(err => {
    console.error('Pirate stories crashed with error:', err); // eslint-disable-line no-console
  });
