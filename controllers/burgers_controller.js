var express = require("express");
var burger = require("../models/burgerModel.js");

var router = express.Router();

router.get("/", function(req, res){

    burger.getAll(function(data){
        let handlebarsObj = {
            burgers: data
        };
        res.render("index", handlebarsObj);
    });
});


router.post("/api/burgers", function(req, res){
    
    burger.add(req.body.name, function(data){
        res.json({id: data.insertId});
    });
});


router.put("/api/burgers/:id", function(req, res){

    burger.update(req.params.id, function(data){
        res.redirect("/");
    })
});



module.exports = router;