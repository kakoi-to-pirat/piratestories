
const Sequelize = require('sequelize');

const dbString = process.env.DATABASE_URL || process.env.DATABASE_LOACAL_URL;

const ssl = !!process.env.DATABASE_URL;
const db = dbString && new Sequelize(dbString, { dialectOptions: { ssl } });

module.exports = { db, Sequelize };
