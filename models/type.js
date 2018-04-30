const sequelize = require('../database/connection_sequelize');
const Sequelize = sequelize.Sequelize;

const UserSeq = require('./user');

const Type = sequelize.define('type', {
  id: { type: Sequelize.BIGINT, primaryKey: true },
  name: { type: Sequelize.STRING }
});

module.exports = Type;
