// require packages
var express = require("express");
var path = require("path");

var app = express();
var PORT = 7200;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "app/public/home.html"));
  });
app.get("/survey", function(req, res) {
    res.sendFile(path.join(__dirname, "survey.html"));
  });

// listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });