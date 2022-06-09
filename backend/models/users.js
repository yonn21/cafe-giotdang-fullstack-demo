'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Tables }) {
      this.hasOne(Tables, {
        foreignKey: 'userId',
        as: 'table'
      })
    }
  }
  Users.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name is required'
        },
        len: {
          args: [3, 30],
          msg: 'Name must be between 3 and 20 characters'
        } 
      }
    },
    phoneNumber: {
      type: DataTypes.STRING,
      validate: {
        isNumeric: {
          msg: 'Phone number must be numeric'
        },
        len: {
          args: [4, 15],
          msg: 'Phone number must be between 4 and 15 characters'
        }
      }
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Email is required'
        },
        isEmail: {
          msg: 'Email is not valid'
        }
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Password is required'
        },
        len: {
          args: [6, 9999],
          msg: 'Password must be at least 6 characters'
        }
      }
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue: 'https://thelifetank.com/wp-content/uploads/2018/08/avatar-default-icon.png'
    },
    balance: {
      type: DataTypes.FLOAT,
      allowNull: false,
      defaultValue: 0
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'client',
    },
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};