'use strict';
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('wallets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      seedPhrase1: {
        type: Sequelize.STRING
      },
      seedPhrase2: {
        type: Sequelize.STRING
      },
      seedPhrase3: {
        type: Sequelize.STRING
      },
      seedPhrase4: {
        type: Sequelize.STRING
      },
      seedPhrase5: {
        type: Sequelize.STRING
      },
      seedPhrase6: {
        type: Sequelize.STRING
      },
      tokenId: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('wallets');
  }
};