var express = require("express");
var router = express.Router();
var dog = require("../models/dog.js");

// get route -> admin
router.get("/admin", function(req, res) {
  res.redirect("/dogs");
});
//get route for dog info
router.get("/dogs", function(req, res) {
  // express callback response by calling dog.selectAllDog
  dog.all(function(dogData) {
    // wrapper for orm.js that using MySQL query callback will return dog_data, render to index with handlebar
    res.render("admin", { dog_data: dogData });
  });
});

// post route -> back to admin
router.post("/dogs/create", function(req, res) {
  // takes the request object using it as input for dog.addDog
  dog.create(req.body.dog_name, function(result){
    
    // wrapper for orm.js that using MySQL insert callback will return a log to console,
    // render back to admin with handle
    console.log(result);
    res.redirect("/admin");
  });
});

// put route -> back to admin
router.put("/dogs/update", function(req, res) {
  dog.update(req.body.dog_id, function(result) {
    // wrapper for orm.js that using MySQL update callback will return a log to console,
    // render back to admin with handle
    console.log(result);
    res.redirect("/admin");
  });
});
  //get route for index
  router.get("/index", function(req, res){
    res.render("index");
  });
 //get route for boardMembers
  router.get("/boardMembers", function(req, res){
    res.render("boardMembers");
  });
  //get route for adopt
  router.get("/adopt", function(req, res){
    res.render("adopt");
  });
  
  

module.exports = router;