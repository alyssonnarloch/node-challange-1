const Type = require('../models/type');

const Types = {
  findAll: function (req, res) {
    Type.findAll().then(types => res.json(JSON.parse(JSON.stringify(types))));
  }
};

module.exports = Types;
