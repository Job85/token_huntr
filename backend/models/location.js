'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Location extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Location.hasMany(models.Token, {
        foreignKey: 'locationId'
      })
      Location.belongsTo(models.User)
    }
  }
  Location.init({
    latitude: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        min: -90.000000,
        max: 90.000000
      }
    },
    longitude: {
      allowNull: false,
      type: DataTypes.INTEGER,
      validate: {
        min: -180.000000,
        max: 180.000000
      }
    },
    level: {
      allowNull: false,
      type: DataTypes.STRING,
    },
    userId: {
      type: DataTypes.INTEGER,
      onDelete: 'CASCADE',
      references: {
        model: 'users',
        key: 'id'
      }
    }
  }, {
    sequelize,
    validate: {
      bothCoordsOrNone() {
        if ((this.latitude === null) !== (this.longitude === null)) {
          throw new Error('Either both latitude and longitude, or neither!');
        }
      }
    },
    modelName: 'Location',
    tableName: 'locations'
  });
  return Location;
};