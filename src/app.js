const app = require('express')();

const createApp = async () => {

  app.get('/', (req, res) => {
    res.status(200).sendFile('client/index.html', {root: __dirname});
  });

  app.get('/admin', (req, res) => {
    res.status(200).sendFile('admin/index.html', {root: __dirname});
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
