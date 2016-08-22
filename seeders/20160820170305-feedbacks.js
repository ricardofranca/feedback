var fs = require('fs');
var file = fs.readFileSync('./fixtures/feedbacks.json');

var list = JSON.parse(file);

module.exports = {
  up: function (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Feedbacks', list, {});
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Feedbacks', {}, {}, { primaryKeys:[], primaryKeyAttributes:[] });
  }
};
