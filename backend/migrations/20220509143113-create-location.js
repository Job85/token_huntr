'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('locations', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      latitude: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          min: -90.000000,
          max: 90.000000
        }
      },
      longitude: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate: {
          min: -180.000000,
          max: 180.000000
        }
      },
      level: {
        allowNull: false,
        type: Sequelize.STRING
      },
      userId: {
        type: Sequelize.INTEGER,
        onDelete: 'CASCADE',
        references: {
          model: 'users',
          key: 'id'
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('locations');
  }
};
