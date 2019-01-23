module.exports = function(sequelize, DataTypes) {
  var goals = sequelize.define("goals", {
    userID: DataTypes.INTEGER,
    goalName: DataTypes.STRING,
    goalType: DataTypes.STRING,
    goalDescription: DataTypes.STRING,   
    goalComplete: DataTypes.BOOLEAN,
    dueDate: DataTypes.DATE
  });
  return goals;
};
