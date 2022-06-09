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
      'Bases',
      [
        {
          name: 'Giọt Đắng - Cầu Giấy',
          address: '36 Đ.Cầu Giấy, Quan Hoa, Cầu Giấy, Hà Nội',
          thumbnail: 'https://elitebba.com/wp-content/uploads/2017/04/default-image.jpg',
          createdAt: '2022-06-03 12:57:01',
          updatedAt: '2022-06-03 13:14:37'
        },
        {
          name: 'Giọt Đắng - Tây Hồ',
          address: '481 Đ.Lạc Long Quân, Xuân La, Tây Hồ, Hà Nội',
          thumbnail: 'https://elitebba.com/wp-content/uploads/2017/04/default-image.jpg',
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Giọt Đắng - Nhổn',
          address: '296 Đ.Cầu Diễn, Minh Khai, Bắc Từ Liêm, Hà Nội',
          thumbnail: 'https://elitebba.com/wp-content/uploads/2017/04/default-image.jpg',
          createdAt: '2022-08-05 22:22:22',
          updatedAt: '2022-09-06 22:23:23'
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
    await queryInterface.bulkDelete('Bases', null, {});
  }
};
