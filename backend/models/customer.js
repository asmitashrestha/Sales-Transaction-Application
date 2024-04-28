'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Customer extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Customer.init({
    CustomerID: DataTypes.INTEGER,
    Name: DataTypes.STRING,
    Email: DataTypes.STRING,
    Phone: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Customer',
  });
  return Customer;
};