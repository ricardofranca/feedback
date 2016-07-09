'use strict';
module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define('User', {
    username: DataTypes.STRING,
    hash: DataTypes.STRING,
    salt: DataTypes.STRING,
    email: DataTypes.STRING,
    activationKey: DataTypes.STRING,
    resetPasswordKey: DataTypes.STRING,
    verified: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return User;
};