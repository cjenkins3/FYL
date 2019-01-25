//Require express
var express = require("express");

var router = express.Router();

// Import the model (goal.js) to use its database functions.
var goal = require("../models/goal.js");

//GET route to get burgers from database.
router.get("/", function(req, res) {
  goal.all(function(data) {
    var hbsObject = {
      goals: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

//POST route to create/add a goal.
router.post("/api/goals", function(req, res) {
  goal.create([
    "goal_name", "removed"
  ], [
    req.body.goal_name, req.body.removed
  ], function(result) {
    // Send back the ID of the new quote
    res.json({ id: result.insertId });
  });
});

//PUT route to update goal removed state.
router.put("/api/goals/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  console.log("condition", condition);

  goal.update({
    removed: req.body.removed
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});

//DELETE route to throw away a goal.
router.delete("/api/goals/:id", function(req, res) {
  var condition = "id = " + req.params.id;

  goal.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return res.status(404).end();
    } else {
      res.status(200).end();
    }
  });
});


// Export routes for server.js to use.
module.exports = router;