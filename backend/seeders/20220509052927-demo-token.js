'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('tokens', [{
      code: 'D3M0 C0D3',
      locationId: 1,
      walletId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('tokens', null, {})
  }
};
