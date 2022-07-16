'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Roles', [ 
      {
      name: 'Manager',
      createdAt: new Date(),
      updatedAt: new Date()
      }, 
      {
      name: 'Sales Manager',
      createdAt: new Date(),
      updatedAt: new Date()
      }, 
      {
      name: 'Technician',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
      name: 'Administrator',
      createdAt: new Date(),
      updatedAt: new Date()
      }, 
      {
      name: 'Service',
      createdAt: new Date(),
      updatedAt: new Date()
      }, 
      {
      name: 'Store',
      createdAt: new Date(),
      updatedAt: new Date()
      },
      {
        name: 'Support',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Guest',
        createdAt: new Date(),
        updatedAt: new Date()
      }
       
    ], {});

},

down: (queryInterface, Sequelize) => {
  return queryInterface.bulkDelete('Roles', null, {});
}
};
