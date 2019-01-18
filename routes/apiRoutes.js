var db = require("../models");

module.exports = function(app) {
  // Get all goals
  app.get("/api/goals", function(req, res) {
    db.Goal.findAll({}).then(function(dbGoal) {
      res.json(dbGoal);
    });
  });

  // Create a new goal
  app.post("/api/goals", function(req, res) {
    db.Goal.create({
      text: req.body.text,
      complete: req.body.complete
    }).then(function(dbGoal) {
      res.json(dbGoal);
    });
  });

  // Delete an goal by id
  app.delete("/api/goals/:id", function(req, res) {
    db.Goal.destroy({ 
      where: { 
      id: req.params.id 
    } 
  }).then(function(dbGoal) {
      res.json(dbGoal);
    });
  });
};
