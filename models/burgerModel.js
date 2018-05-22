var orm = require("../config/orm.js");

var burgers = {

    getAll: function(cb) {

      orm.selectAll("burgers", function(res) {
        cb(res);
      });
    },

    add: function(vals, cb) {

      orm.insertOne("burgers", "burger_name", vals, function(res) {
        cb(res);
      });
    },

    update: function(value, condition, cb) {

      orm.updateOne("burgers", "devoured", value, condition, function(res) {
        cb(res);
      });
    }
};



module.exports = burgers;