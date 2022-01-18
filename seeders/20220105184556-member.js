'use strict';
var faker = require('Faker');
//const {Sequelize}  = require('sequelize');

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const members = [...Array(100)].map((member) => (
      {
        first_name: faker.Name.firstName(),
        last_name: faker.Name.lastName(),
        phone: faker.PhoneNumber.phoneNumber(),
        email: faker.Internet.email(),
        staff: Math.round((Math.random() * 1) + 0) === 0,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ))
    await queryInterface.bulkInsert('Members', members, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Members', null, {});
  }
};


