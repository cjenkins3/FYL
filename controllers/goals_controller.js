// Pull in required dependencies
var express = require("express");
var router = express.Router();

// Import the model (goal.js) to use its database functions.
var goal = require("../models/goal.js");

// Create the routes and associated logic
router.get("/", function(req, res) {
  goal.selectAll(function(data) {
    var hbsObject = {
      user: data
    };
    console.log(hbsObject);

    // res.render("index", hbsObject);
  });
});

router.post("/user", function(req, res) {
  goal.insertOne(
    ["userName,userPassword"],
    [req.params.userName, "1234"],
    // ["userPassword"],
    // req.params.userPassword,
    // ["emailAddress"],
    // req.params.emailAddress,
    function(data) {
      console.log("you wrote it");

      // res.redirect("/");
    }
  );
});

// router.put("/goals/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   goal.updateOne(
//     {
//       consumed: true
//     },
//     condition,
//     function(data) {
//       res.redirect("/");
//     }
//   );
// });

// Export routes for server.js to use.
module.exports = router;
