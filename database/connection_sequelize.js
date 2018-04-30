const Sequelize = require('sequelize');
const sequelize = new Sequelize('node_challange', 'root', 'root', {
  host: 'localhost',
  dialect: 'mysql'
});

module.exports = sequelize;
