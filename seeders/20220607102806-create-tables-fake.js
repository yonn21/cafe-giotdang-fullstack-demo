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
      'Tables',
      [
        {
          name: 'Bàn 2 Người',
          type: 2,
          position: 11,
          status: 'available',
          baseId: 1,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 2 Người',
          type: 2,
          position: 12,
          status: 'available',
          baseId: 1,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 1 Người',
          type: 1,
          position: 13,
          status: 'available',
          baseId: 1,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 4 Người',
          type: 4,
          position: 14,
          status: 'available',
          baseId: 1,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 2 Người',
          type: 2,
          position: 15,
          status: 'available',
          baseId: 1,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 2 Người',
          type: 2,
          position: 16,
          status: 'available',
          baseId: 1,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 3 Người',
          type: 3,
          position: 21,
          status: 'available',
          baseId: 1,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 4 Người',
          type: 4,
          position: 22,
          status: 'available',
          baseId: 1,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 4 Người',
          type: 4,
          position: 23,
          status: 'available',
          baseId: 1,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 1 Người',
          type: 1,
          position: 24,
          status: 'available',
          baseId: 1,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 1 Người',
          type: 1,
          position: 25,
          status: 'available',
          baseId: 1,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 1 Người',
          type: 1,
          position: 26,
          status: 'available',
          baseId: 1,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 2 Người',
          type: 2,
          position: 11,
          status: 'available',
          baseId: 2,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 2 Người',
          type: 2,
          position: 12,
          status: 'available',
          baseId: 2,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 1 Người',
          type: 1,
          position: 13,
          status: 'available',
          baseId: 2,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 4 Người',
          type: 4,
          position: 14,
          status: 'available',
          baseId: 2,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 2 Người',
          type: 2,
          position: 15,
          status: 'available',
          baseId: 2,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 2 Người',
          type: 2,
          position: 16,
          status: 'available',
          baseId: 2,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 2 Người',
          type: 2,
          position: 11,
          status: 'available',
          baseId: 3,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 2 Người',
          type: 2,
          position: 12,
          status: 'available',
          baseId: 3,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 1 Người',
          type: 1,
          position: 13,
          status: 'available',
          baseId: 3,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 4 Người',
          type: 4,
          position: 14,
          status: 'available',
          baseId: 3,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 2 Người',
          type: 2,
          position: 15,
          status: 'available',
          baseId: 3,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 2 Người',
          type: 2,
          position: 16,
          status: 'available',
          baseId: 3,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 3 Người',
          type: 3,
          position: 21,
          status: 'available',
          baseId: 3,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 4 Người',
          type: 4,
          position: 22,
          status: 'available',
          baseId: 3,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 4 Người',
          type: 4,
          position: 23,
          status: 'available',
          baseId: 3,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 1 Người',
          type: 1,
          position: 24,
          status: 'available',
          baseId: 3,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 1 Người',
          type: 1,
          position: 25,
          status: 'available',
          baseId: 3,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
        },
        {
          name: 'Bàn 1 Người',
          type: 1,
          position: 26,
          status: 'available',
          baseId: 3,
          createdAt: '2022-07-04 11:11:11',
          updatedAt: '2022-08-05 11:12:31'
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
