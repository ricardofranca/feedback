'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Feedbacks', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      description: {
        type: Sequelize.TEXT
      },
      start: {
        allowNull: false,
        type: Sequelize.DATE
      },
      finish: {
        allowNull: false,
        type: Sequelize.DATE
      },
      UserId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Users",
          key: 'id',
          // This declares when to check the foreign key constraint. PostgreSQL only.
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: function(queryInterface, Sequelize) {
    return queryInterface.dropTable('Feedbacks');
  }
};