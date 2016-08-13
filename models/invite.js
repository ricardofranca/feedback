'use strict';
module.exports = function(sequelize, DataTypes) {
  var Invite = sequelize.define('Invite', {
    positive1: DataTypes.TEXT,
    positive2: DataTypes.TEXT,
    positive3: DataTypes.TEXT,
    negative1: DataTypes.TEXT,
    negative2: DataTypes.TEXT,
    negative3: DataTypes.TEXT
  }, {
    classMethods: {
      associate: function(models) {
        Invite.belongsTo(models.User);
        Invite.belongsTo(models.Feedback);
      }
    }
  });
  return Invite;
};