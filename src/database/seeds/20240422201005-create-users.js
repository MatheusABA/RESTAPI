const bcryptjs = require('bcryptjs')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('users', [
		{
	    name: 'Kaka',
    	email: 'kaka@gmail.com',
		password_hash: await bcryptjs.hash('kaka123', 8),
		created_at: new Date(),
		updated_at: new Date()
    	},
		{
			name: 'Kaka2',
			email: 'Kaka2@gmail.com',
			password_hash: await bcryptjs.hash('kaka123', 8),
			created_at: new Date(),
			updated_at: new Date()
		},
		{
			name: 'Kaka3',
			email: 'Kaka3@gmail.com',
			password_hash: await bcryptjs.hash('kaka123', 8),
			created_at: new Date(),
			updated_at: new Date()
		}
	],
	{});

  },

  async down (queryInterface, Sequelize) {

  }
};
