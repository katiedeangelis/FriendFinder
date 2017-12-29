// ==============================================================================
// DEPENDENCIES
// ==============================================================================

var inquirer = require("inquirer");
var express = require("express");
var bodyParser = require("body-parser");

// ==============================================================================
// EXPRESS CONFIGURATION
// This sets up the basic properties for our express server
// ==============================================================================

// Tell node that we are creating an "express" server
var app = express();

// Sets an initial port. We"ll use this later in our listener
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// ================================================================================
// ROUTER
// The below code points the server to the "route" files.
// These routes give the server a "map" of how to respond when users visit or request data from various URLs.
// ================================================================================

require("./app/routing/apiroutes")(app);
require("./app/routing/htmlroutes")(app);

// =============================================================================
// LISTENER
// The below code effectively "starts" the server
// =============================================================================

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});