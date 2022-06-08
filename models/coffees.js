'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Coffees extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Tables }) {
      this.belongsToMany(Tables, {
        through: 'Orders',
        foreignKey: 'coffeeId',
        as: 'order'
      })
    }
  }
  Coffees.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name is required'
        },
      }
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://w7.pngwing.com/pngs/216/878/png-transparent-coffee-cup-latte-cafe-mug-cartoon-exquisite-tea-mugs-cartoon-character-tea-vector-tea.png'
    },
    price: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Price is required'
        },
        isNumeric: {
          msg: 'Price must be a number'
        },
      }
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Description is required'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Coffees',
  });
  return Coffees;
};