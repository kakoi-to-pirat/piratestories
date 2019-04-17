const app = require('express')();

const createApp = async () => {

  app.get('/hello', (req, res) => {
    res.status(200).json({
      message: "hello, man"
    })
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
