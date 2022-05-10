'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Wallet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Wallet.hasMany(models.Token, {
        foreignKey: 'locationId'
      })
      Wallet.belongsTo(models.User, {
        foreignKey: 'ownerId',
        as: 'owner',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Wallet.init({
    seedPhrase1: {
      allowNull: false,
      type: DataTypes.STRING
    },
    seedPhrase2: {
      allowNull: false,
      type: DataTypes.STRING
    },
    seedPhrase3: {
      allowNull: false,
      type: DataTypes.STRING
    },
    seedPhrase4: {
      allowNull: false,
      type: DataTypes.STRING
    },
    seedPhrase5: {
      allowNull: false,
      type: DataTypes.STRING
    },
    seedPhrase6: {
      allowNull: false,
      type: DataTypes.STRING
    },
    ownerId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Wallet',
    tableName: 'wallets'
  });
  return Wallet;
};