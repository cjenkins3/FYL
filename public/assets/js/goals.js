//DOM is fully loaded, attach handlers
$(function() {
  //Click event for adding a goal.
  $(".goal-form").on("submit", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();

      //Grab goal name from form field.
    
      var newGoal = {
      goal_name: $("#goalName").val().trim(),
      // date: $("#todaysDate").val().trim(),
      removed: 0
      };

      // Send the POST request using ajax.
      $.ajax("/api/goals", {
      type: "POST",
      data: newGoal
      }).then(
      function() {
          console.log("created new goal");
          // Reload the page to get the updated list
          location.reload();
      }
      );
  });

  //Click event to throw away/delete goal.
  $(".delete-goal").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the DELETE request using ajax.
      $.ajax("/api/goals/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("deleted goal", id);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });

  //Click event for "remove me" button.
  $(".change-remove").on("click", function(event) {
      var id = $(this).data("id");
      var newRemove = $(this).data("newremove");
  
      var newRemoveState = {
        removed: "true"
      };
  
      // Send the PUT request using ajax.
      $.ajax("/api/goals/" + id, {
        type: "PUT",
        data: newRemoveState
      }).then(
        function() {
          console.log("changed remove to", newRemove);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });   
});
