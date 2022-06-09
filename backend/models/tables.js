'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tables extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Bases, Users, Coffees }) {
      this.belongsTo(Bases, {
        foreignKey: 'baseId',
        as: 'base'
      })
      this.belongsTo(Users, {
        foreignKey: 'userId',
        as: 'user'
      })
      this.belongsToMany(Coffees, {
        through: 'Orders',
        foreignKey: 'tableId',
        as: 'order'
      })
    }
  }
  Tables.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name is required'
        },
      }
    },
    type: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Type is required'
        },
      }
    },
    position: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Position is required'
        },
      },
    },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'available',
    },
  }, {
    sequelize,
    modelName: 'Tables',
  });
  return Tables;
};