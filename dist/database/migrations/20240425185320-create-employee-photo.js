"use strict";/** @type {import('sequelize-cli').Migration} */
module.exports = {
	async up (queryInterface, Sequelize) {

		await queryInterface.createTable('photos', {
			id: {
				type: Sequelize.INTEGER,
				allowNull: false,
				autoIncrement: 1,
				primaryKey: true,
			},
			originalname: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			filename: {
				type: Sequelize.STRING,
				allowNull: false,
			},
			employee_id: {
				type: Sequelize.INTEGER,
				allowNull: true,
				references: {
					model: 'employees',
					key: 'id',
				},
				onDelete: 'SET NULL',
				onUpdate: 'CASCADE',
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

		await queryInterface.dropTable('photos');

		}
	};
