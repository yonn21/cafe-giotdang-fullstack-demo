'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Phương Vũ',
          phoneNumber: '0000000000',
          email: 'phuongvu@gmail.com',
          password: '$2b$13$o2KMrs/xWQ/FaioTyqftbuKSvBlCa/kfpP2c6uG3M/WwnGjGsqV2u',
          avatar: 'https://thelifetank.com/wp-content/uploads/2018/08/avatar-default-icon.png',
          balance: 9999999,
          type: 'admin',
          createdAt: '2022-06-03 12:57:01',
          updatedAt: '2022-06-03 13:14:37'
        },
        {
          name: 'Hân Nguyễn',
          phoneNumber: '1111111111',
          email: 'hannguyen@gmail.com',
          password: '$2b$13$cGGrpQ4deaut4hzkGhJ/DOVoS8nFDGX5Dxi6Y3CUvyBRzA5/lKo8K',
          avatar: 'https://thelifetank.com/wp-content/uploads/2018/08/avatar-default-icon.png',
          type: 'client',
          createdAt: '2022-06-03 12:57:01',
          updatedAt: '2022-06-03 13:14:37'
        },
        {
          name: 'Ly Trần',
          phoneNumber: '2222222222',
          email: 'lytran@gmail.com',
          password: '$2b$13$HrjuuLBm5SnbzDAwtKoLA.58zXbTUxrTC2j0v7TRBJ625NfEN/jky',
          avatar: 'https://thelifetank.com/wp-content/uploads/2018/08/avatar-default-icon.png',
          type: 'client',
          createdAt: '2022-06-03 12:57:01',
          updatedAt: '2022-06-03 13:14:37'
        },
        {
          name: 'Ngọc Trịnh',
          phoneNumber: '3333333333',
          email: 'ngoctrinh@gmail.com',
          password: '$2b$13$DAFhSyzP4Gp0LLBC2N61QuhYyDjlre8wADE5SK0pr8Ut94GiO3.gy',
          avatar: 'https://thelifetank.com/wp-content/uploads/2018/08/avatar-default-icon.png',
          type: 'client',
          createdAt: '2022-06-03 12:57:01',
          updatedAt: '2022-06-03 13:14:37'
        },
      ], {});
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Users', null, {});
  }
};
