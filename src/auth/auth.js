const auth = (req, res, next) =>
  req.isAuthenticated()
    ? next()
    : res.status(200).sendFile('login.html', {root: __dirname});

module.exports = auth;
