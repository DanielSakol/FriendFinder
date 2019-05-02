// require packages
var express = require("express");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 7200;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//routes
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

// listen
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
  });