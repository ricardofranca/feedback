var crypto = require('crypto');

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
    },
    instanceMethods: {
        setPassword: function (password, callback) {

            var self = this;

            crypto.randomBytes(32, function (err, buf) {

                var salt = buf.toString('hex');

                crypto.pbkdf2(password, salt, 12000, 512, function (err, hashRaw) {

                    self.set("hash", new Buffer(hashRaw, 'binary').toString('hex'));
                    self.set("salt", salt);

                    callback(null, self);

                });
            });


        }
    }
  });
  return User;
};
