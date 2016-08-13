const crypto = require('crypto');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
      },
    },
    name: DataTypes.STRING,
    hash: DataTypes.STRING,
    salt: DataTypes.STRING,
    email: {
      type: DataTypes.STRING,
      validate: {
        notEmpty: true,
        isEmail: true,
      },
    },
    googleId: {
      type: DataTypes.STRING
    },
    imageUrl: DataTypes.STRING,
    activationKey: DataTypes.STRING,
    resetPasswordKey: DataTypes.STRING,
    verified: DataTypes.BOOLEAN,
  }, {
    instanceMethods: {
      generateHash: function(callback) {
        const updateHash = this.update.bind(this);
        crypto.randomBytes(32, (error, buffer) => {
          const hash = buffer.toString('hex');
          updateHash({ hash }).then(callback);
        });
      },
      setPassword: function (password, callback) {
        const self = this;
        crypto.randomBytes(32, function (error, buf) {
          const salt = buf.toString('hex');
          crypto.pbkdf2(password, salt, 12000, 512, function (err, hashRaw) {
            self.set('hash', new Buffer(hashRaw, 'binary').toString('hex'));
            self.set('salt', salt);
            callback(null, self);
          });
        });
      },
    },
  });
  return User;
};

/*
const faker = require('faker');

var user = {
  username: 'internet.userName',
  name: 'name.findName',
  email: 'internet.email',
  verified: 'random.boolean'
}


const factory = (count, model) => {
  var models = [];

  function* build(){

    let index = 1;
    while(true) {
      let dummy = Object.assign({}, model);
      Object.keys(dummy).forEach(
        key => {
          dummy[key] = faker.fake(`{{${dummy[key]}}}`)
        }
      )
      models.push(dummy);
      yield index++;
    }

  }

  for( let index of build()) {
    console.log(index, models.length);
    if(index === count) break;
  }

  return models;
}

factory(10, user);
*/
