var express = require("express");

var router = express.Router();
var dog = require("../models/dog.js");

// get route -> index
router.get("/", function(req, res) {
  res.redirect("/dogs");
});

router.get("/dogs", function(req, res) {
  // express callback response by calling dog.selectAllDog
  dog.all(function(dogData) {
    // wrapper for orm.js that using MySQL query callback will return dog_data, render to index with handlebar
    res.render("index", { dog_data: dogData });
  });
});

// post route -> back to index
router.post("/dogs/create", function(req, res) {
  // takes the request object using it as input for dog.addDog
  dog.create(req.body.dog_name, function(result) {
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

// put route -> back to index
router.put("/dogs/update", function(req, res) {
  dog.update(req.body.dog_id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to index with handle
    console.log(result);
    res.redirect("/");
  });
});

module.exports = router;