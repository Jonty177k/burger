//dependencies
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require('method-override')

//instance of express app
var app = express();

// handlebars templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

// server port
var port = 3000;
