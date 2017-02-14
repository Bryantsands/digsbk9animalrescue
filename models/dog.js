var orm = require("../config/orm.js");

var dog = {
  all: function(cb) {
    orm.all("dogs", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("dogs", [
      "dog_name", "unavailable"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("dogs", {
      unavailable: true
    }, condition, cb);
  }
};

module.exports = dog;