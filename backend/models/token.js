'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Token extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Token.belongsTo(models.Location, {
        foreignKey: 'locationId',
        as: 'location',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
      Token.belongsTo(models.Wallet, {
        foreignKey: 'walletId',
        as: 'wallet',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      })
    }
  }
  Token.init({
    code: DataTypes.STRING,
    locationId: {
      allowNull: false,
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'locations',
        key: 'id'
      }
    },
    walletId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'wallets',
        key: 'id'
      }
    }
  }, {
    sequelize,
    modelName: 'Token',
    tableName: 'tokens'
  });
  return Token;
};