// Pull in required dependencies
// require("dotenv").config();
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
// var exphbs = require("express-handlebars");
var app = express();


var port = process.env.PORT || 3000;
// Middleware and Static directory

app.use(express.json());
// Serve static content for the app from the 'public' directory
// Serve static content for the app from the 'public' directory
app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

// // Handlebars -- commented it out just incase

// app.engine(
//   "handlebars",
//   exphbs({
//     defaultLayout: "main"
//   })
// );
// app.set("view engine", "handlebars");

// Routes
var routes = require("./controllers/goals_controller");
// require("./routes/apiRoutes.js")(app);
// require("./routes/htmlRoutes.js")(app);


// If running a test, set syncOptions.force to true
// clearing the `testdb`
// if (process.env.NODE_ENV === "test") {
//   syncOptions.force = true;
// }

// Starting the server, syncing our models ------------------------------------/


module.exports = app;

app.use("/", routes);

app.listen(port);
