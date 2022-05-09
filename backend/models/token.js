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
      Token.belongsTo(models.Location)
      Token.belongsToMany(models.Wallet, {
        through: 'TokenWallet',
        as: 'wallets',
        foreignKey: 'tokenId',
      })
    }
  }
  Token.init({
    code: DataTypes.STRING,
    locationId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'locations',
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