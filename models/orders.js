'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Orders extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate() {
      
    }
  }
  Orders.init({
    amount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Amount is required'
        },
        isNumeric: {
          msg: 'Amount must be a number'
        },
      }
    },
    totalPrice: {
      type: DataTypes.FLOAT,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Total price is required'
        },
        isNumeric: {
          msg: 'Total price must be a number'
        },
      }
    },
  }, {
    sequelize,
    modelName: 'Orders',
  });
  return Orders;
};