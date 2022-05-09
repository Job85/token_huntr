'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Wallets', [{
      seedPhrase1: 'Demo',
      seedPhrase2: 'Test',
      seedPhrase3: 'Trial',
      seedPhrase4: 'Prelim',
      seedPhrase5: 'Tryout',
      seedPhrase6: 'Eval',
      ownerId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }])
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Wallets', null, {});
  }
};
