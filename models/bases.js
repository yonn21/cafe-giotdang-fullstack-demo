'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Bases extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Tables }) {
      this.hasMany(Tables, {
        foreignKey: 'baseId',
        as: 'tables'
      })
    }
  }
  Bases.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name is required'
        },
      }
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Address is required'
        }
      }
    },
    thumbnail: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://elitebba.com/wp-content/uploads/2017/04/default-image.jpg'
    }
  }, {
    sequelize,
    modelName: 'Bases',
  });
  return Bases;
};