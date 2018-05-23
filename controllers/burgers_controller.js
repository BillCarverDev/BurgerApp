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

router.get("/api/burgers", function(req, res){

    burger.getAll(function(data){
        res.json(data);
    });
});



router.post("/api/burgers", function(req, res){
    
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(data){
        // res.json({id: data.insertId});
        res.redirect("/");
    });
});


router.put("/api/burgers/:id", function(req, res){

    burger.update(req.params.id, function(data){
        console.log(data);
        res.redirect("/");
    })
});





module.exports = router;