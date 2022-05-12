'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('locations', [{
      latitude: '45.900890',
      longitude: '98.073943',
      level: 'Easy',
      userId: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('locations', null, {});
  }
};
