// Dependencies
// =============================================================
var path = require("path");

// Routes
// =============================================================
module.exports = function(app) {

  // Each of the below routes just handles the HTML page that the user gets sent to.

  // index route loads view.html
  app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/main.html"));
  });

  // add route loads add.html
  app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/add.html"));
  });

  // main route loads main.html
  app.get("/main", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/main.html"));
  });

  // search route loads search.html
  app.get("/search", function(req, res) {
    res.sendFile(path.join(__dirname, "../views/search.html"));
  });

  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
