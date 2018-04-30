var connection = require('../database/connection');

const UserSeq = require('../models/user');

var TABLE = 'users';

var User = {
  getAll: function (req, res) {
    var rs = connection.query(`SELECT * FROM ${TABLE}`, function (error, results, field) {
      var apiResult = {};

      if(error) {
        apiResult.error = error;
        res.status(500).json(apiResult);
      } else {
        var resultJson = JSON.stringify(results);
        resultJson = JSON.parse(resultJson);

        apiResult.meta = {
          table: 'users',
          type: 'collection',
          total: resultJson.length,
        };

        apiResult.data = resultJson;

        res.json(apiResult);
      }
    });
  },
  getById: function (req, res) {
    var rs = connection.query(`SELECT * FROM ${TABLE} WHERE id = ?`, [req.params.id], function (error, results, field) {
      if (error) {
        res.status(500).json(error);
      } else {
        var resultJson = JSON.stringify(results);
        resultJson = JSON.parse(resultJson);
        res.json(resultJson);
      }
    });
  },
  create: function (req, res) {
    var rs = connection.query(`INSERT INTO ${TABLE} (name, type_id) VALUE (?, ?)`, [req.body.name, req.body.type_id], function (error, results, field) {
      if (error) {
        res.status(500).json(error);
      } else {
        res.json('ok');
      }
    });
  },
  findAll: function (req, res) {
    UserSeq.findAll().then(users => {
      res.json(JSON.parse(JSON.stringify(users)));
    });

  }
};

module.exports = User;
