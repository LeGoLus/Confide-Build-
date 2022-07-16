'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Users', [
      {
          name: 'Manager',
          email: 'manager@gmail.com',
          roleId: '1',
          registration_type: 'email',
          social_user_id: '',
          password: '$2b$10$7rdGusUTz9G9ID3UF854n.eY.lxV.PGnS9s7MVHHj.p9SIlSt3OTq',
      },
      {
          name: 'Sales Manager',
          email: 'sales@gmail.com',
          roleId: '2',
          registration_type: 'email',
          social_user_id: '',
          password: '$2b$10$7rdGusUTz9G9ID3UF854n.eY.lxV.PGnS9s7MVHHj.p9SIlSt3OTq',
      },
      {
          name: 'Technician',
          email: 'technician@gmail.com',
          roleId: '3',
          registration_type: 'email',
          social_user_id: '',
          password: '$2b$10$7rdGusUTz9G9ID3UF854n.eY.lxV.PGnS9s7MVHHj.p9SIlSt3OTq',
      },
      {
        name: 'Administrator',
        email: 'admin@gmail.com',
        roleId: '4',
        registration_type: 'email',
        social_user_id: '',
        password: '$2b$10$7rdGusUTz9G9ID3UF854n.eY.lxV.PGnS9s7MVHHj.p9SIlSt3OTq',
    },
      {
          name: 'Service',
          email: 'service@gmail.com',
          roleId: '5',
          registration_type: 'email',
          social_user_id: '',
          password: '$2b$10$7rdGusUTz9G9ID3UF854n.eY.lxV.PGnS9s7MVHHj.p9SIlSt3OTq',
      },
      {
          name: 'Store',
          email: 'store@gmail.com',
          roleId: '6',
          registration_type: 'email',
          social_user_id: '',
          password: '$2b$10$7rdGusUTz9G9ID3UF854n.eY.lxV.PGnS9s7MVHHj.p9SIlSt3OTq',
      },
      {
          name: 'Support',
          email: 'support@gmail.com',
          roleId: '7',
          registration_type: 'email',
          social_user_id: '',
          password: '$2b$10$7rdGusUTz9G9ID3UF854n.eY.lxV.PGnS9s7MVHHj.p9SIlSt3OTq',
      },
      {
        name: 'Guest',
        email: 'guest@gmail.com',
        roleId: '',
        registration_type: 'email',
        social_user_id: '',
        password: '$2b$10$7rdGusUTz9G9ID3UF854n.eY.lxV.PGnS9s7MVHHj.p9SIlSt3OTq',
    },
  ], {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('User', null, {});
  }
};
