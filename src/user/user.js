const { db, Sequelize } = require('../db');

const User = db.define('User', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    allowNull: false,
    type: Sequelize.STRING
  },
}, {
  // options
});

module.exports = User;
