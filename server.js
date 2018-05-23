var express = require("express");
var bodyParser = require("body-parser");
// var mySql = require("mysql");
var exphbs = require('express-handlebars');
var routes = require("./controllers/burgers_controller.js");
var method = require("method-override");

var PORT = process.env.PORT || 3000

var app = express();

// Serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// parse application/json
app.use(bodyParser.json());
app.use(method("_method"));
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.use(routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: " + PORT);
});

// Each bug you pursue is a lengthy lesson that adds to your arsenal of understanding.


// Issues: //
// Devoured burgers hold onto their ID; need to add logic to reorder them or remove them from the page

// Resolved Issues: //
// Fixed routing
// Corrected array parameters to the burgers.create function in controller