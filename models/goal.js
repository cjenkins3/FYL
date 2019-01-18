module.exports = function(sequelize, DataTypes) {
  var Goal = sequelize.define("Goal", {
    text: DataTypes.STRING,
    description: DataTypes.TEXT,
    allowNull: false
  });
  return Goal;
};
