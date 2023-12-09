'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Students extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Students.init({
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    class: DataTypes.INTEGER,
    Maths: DataTypes.DOUBLE,
    Science: DataTypes.DOUBLE,
    English: DataTypes.DOUBLE,
    Hindi: DataTypes.DOUBLE,
    SST: DataTypes.DOUBLE,
    RegID: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Students',
  });
  return Students;
};