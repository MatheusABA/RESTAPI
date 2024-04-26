/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {

	  await queryInterface.createTable('employees', {
		  id: {
			  type: Sequelize.INTEGER,
			  allowNull: false,
			  autoIncrement: 1,
			  primaryKey: true,
		  },
		  name: {
			  type: Sequelize.STRING,
			  allowNull: false,
		  },
		  lastname: {
			  type: Sequelize.STRING,
			  allowNull: false,
		  },
		  email : {
			  type: Sequelize.STRING,
			  allowNull: false,
			  unique: true,
		  },
		  age: {
			  type: Sequelize.INTEGER,
			  allowNull: false,
		  },
		  function: {
			  type: Sequelize.STRING,
			  allowNull: false,
		  },
		  salary: {
			  type: Sequelize.DECIMAL,
			  allowNull: false,

		  },
		  created_at: {
			  type: Sequelize.DATE,
			  allowNull: false,
		  },
		  updated_at: {
			  type: Sequelize.DATE,
			  allowNull: false,
		  },
	  });

	},

	async down (queryInterface) {

	  await queryInterface.dropTable('employees');

	}
  };
