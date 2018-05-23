var orm = require("../config/orm.js");

var burgers = {

    getAll: function(cb) {

      orm.selectAll("burgers", function(res) {
        cb(res);
        // console.log(res);
      });
    },

    create: function(cols, vals, cb) {

      orm.insertOne("burgers", cols, vals, function(res) {
        cb(res);
        console.log(res);
      });
    },

    update: function(id, cb) {
      var condition = "id= " + id
      orm.updateOne("burgers", {devoured:true}, condition, function(res) {
        cb(res);
      });
    }
};



module.exports = burgers;