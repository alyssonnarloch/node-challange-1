var connection = require('../database/connection');

var User = {
  getAll: function (req, res) {
    var rs = connection.query('SELECT * FROM users', function (error, results, field) {
      var apiResult = {};

      if(error) {
        apiResult.error = error;

        res.json(apiResult);
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
  }
};

module.exports = User;
