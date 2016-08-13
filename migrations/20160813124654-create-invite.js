'use strict';
module.exports = {
  up: function(queryInterface, Sequelize) {
    return queryInterface.createTable('Invites', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      FeedbackId: {
        type: Sequelize.INTEGER,
        references: {
          model: "Feedbacks",
          key: 'id',
          // This declares when to check the foreign key constraint. PostgreSQL only.
          deferrable: Sequelize.Deferrable.INITIALLY_IMMEDIATE
        }
      },
      positive1: {
        type: Sequelize.TEXT
      },
      positive2: {
        type: Sequelize.TEXT
      },
      positive3: {
        type: Sequelize.TEXT
      },
      negative1: {
        type: Sequelize.TEXT
      },
      negative2: {
        type: Sequelize.TEXT
      },
      negative3: {
        type: Sequelize.TEXT
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
    return queryInterface.dropTable('Invites');
  }
};