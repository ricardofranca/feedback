'use strict';
module.exports = function(sequelize, DataTypes) {
  var Feedback = sequelize.define('Feedback', {
    description: DataTypes.TEXT,
    start: DataTypes.DATE,
    finish: DataTypes.DATE,
  }, {
    classMethods: {
      associate: function(models) {
        Feedback.belongsTo(models.User);
        Feedback.hasMany(models.Invite);
      }
    }
  });
  return Feedback;
};