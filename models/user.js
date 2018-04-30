const sequelize = require('../database/connection_sequelize');
const Sequelize = sequelize.Sequelize;

const Type = require('./type');

const UserSeq = sequelize.define('user', {
  id: { type: Sequelize.BIGINT, primaryKey: true, autoIncrement: true },
  name: { type: Sequelize.STRING },
  type_id: { type: Sequelize.BIGINT, references: {
      model: Type, key: 'id'
    }
  }
});

module.exports = UserSeq;
