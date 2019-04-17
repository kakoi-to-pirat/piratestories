require('dotenv').config();

const createApp = require('./app');

const PORT = process.env.PORT || process.env.LOCAL_INPUT_PORT;

createApp()
  .then(app => {
    app.listen(PORT, () => {
      console.info(`Pirate stories running at ${PORT} port`); // eslint-disable-line no-console
    });
  })
  .catch(err => {
    console.error(err); // eslint-disable-line no-console
  });
