'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  wallet.init({
    seedPhrase1: DataTypes.STRING,
    seedPhrase2: DataTypes.STRING,
    seedPhrase3: DataTypes.STRING,
    seedPhrase4: DataTypes.STRING,
    seedPhrase5: DataTypes.STRING,
    seedPhrase6: DataTypes.STRING,
    tokenId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'wallet',
  });
  return wallet;
};