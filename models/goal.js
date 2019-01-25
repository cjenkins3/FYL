// Import the ORM to create functions that will interact with the database.
var orm = require("../config/orm.js");

var goal = {
  //Select all goals from database.
  all: function(cb) {
    orm.all("goals", function(res) {
      cb(res);
    });
  },

  //Create function to create/add a goal.
  // The variables cols and vals are arrays.
  create: function(cols, vals, cb) {
    orm.create("goals", cols, vals, function(res) {
      cb(res);
    });
  },

  //Update function to update goal devoured state.
  update: function(objColVals, condition, cb) {
    orm.update("goals", objColVals, condition, function(res) {
      cb(res);
    });
  },

  //Delete function to throw away/delete goal from database.
  delete: function(condition, cb) {
    orm.delete("goals", condition, function(res) {
      cb(res);
    });
  }
};

// Export the database functions for the controller (burgers_controller.js).
module.exports = goal;

