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
      'Coffees',
      [
        {
          name: 'Bạc Xỉu',
          image: 'https://cdn.tgdd.vn/2021/03/CookProduct/Bac-xiu-la-gi-nguon-goc-va-cach-lam-bac-xiu-thom-ngon-don-gian-tai-nha-0-1200x676.jpg',
          price:  123,
          description: 'mô tả',
          createdAt: '2022-06-03 12:57:01',
          updatedAt: '2022-06-03 13:14:37'
        },
        {
          name: 'Đen Nóng/Đá',
          image: 'https://cdn.tgdd.vn/2021/03/CookProduct/Bac-xiu-la-gi-nguon-goc-va-cach-lam-bac-xiu-thom-ngon-don-gian-tai-nha-0-1200x676.jpg',
          price: 456,
          description: 'mô tả',
          createdAt: '2022-06-03 12:57:01',
          updatedAt: '2022-06-03 13:14:37'
        },
        {
          name: 'Nâu Nóng/Đá',
          image: 'https://cdn.tgdd.vn/2021/03/CookProduct/Bac-xiu-la-gi-nguon-goc-va-cach-lam-bac-xiu-thom-ngon-don-gian-tai-nha-0-1200x676.jpg',
          price: 321,
          description: 'mô tả',
          createdAt: '2022-06-03 12:57:01',
          updatedAt: '2022-06-03 13:14:37'
        },
        {
          name: 'Cafe Cốt Dừa',
          image: 'https://cdn.tgdd.vn/2021/03/CookProduct/Bac-xiu-la-gi-nguon-goc-va-cach-lam-bac-xiu-thom-ngon-don-gian-tai-nha-0-1200x676.jpg',
          price: 654,
          description: 'mô tả',
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
