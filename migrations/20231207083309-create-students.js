'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Students', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      firstName: {
        type: Sequelize.STRING
      },
      lastName: {
        type: Sequelize.STRING
      },
      class: {
        type: Sequelize.INTEGER
      },
      Maths: {
        type: Sequelize.DOUBLE
      },
      Science: {
        type: Sequelize.DOUBLE
      },
      English: {
        type: Sequelize.DOUBLE
      },
      Hindi: {
        type: Sequelize.DOUBLE
      },
      SST: {
        type: Sequelize.DOUBLE
      },
      RegID: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Students');
  }
};