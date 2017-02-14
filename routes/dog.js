var db = require("../models");

module.exports = function(app) {
    app.get("admin", function (req, res){
        res.render("admin");
    });

    app.get("/admin/:id", function(req, res){
        db.dogs.findOne({
            where:{
                id:req.params.id
            },
        })
    })
}