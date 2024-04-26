import Sequelize, { Model } from 'sequelize';

export default class Employee extends Model {
	static init(sequelize) {
		super.init({	// Criando Model através do Sequelize
			name: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					len: {
						args: [3, 100],
						msg: 'Name must have between 3 and 100 characters'
					}
				}
			},
			lastname: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					len: {
						args: [3, 100],
						msg: 'Lastname must have between 3 and 100 characters'
					}
				}
			},
			email:	{
				type: Sequelize.STRING,
				defaultValue: '',
				unique: {
					msg: 'Email already registred!'
				},
				validate: {
					isEmail: {
						msg: 'Invalid Email'
					}
				}
			},
			age: {
				type:Sequelize.INTEGER,
				defaultValue: '',
				validate: {
					isInt: {
						msg: 'Age must be an integer'
					}
				}
			},
			function: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					isAlpha: {
						msg: 'Employee function must be only text'
					}

				}
			},
			salary: {
				type: Sequelize.DECIMAL,
				defaultValue: '',
				validate: {
					isDecimal: {
						msg: 'Employee salary must be decimal. Example: 1000'
					}
				}
			},
		}, {
			sequelize,
		});
		return this;
	}

	static associate(models) {
		this.hasMany(models.Photo, { foreignKey: 'employee_id'})
	}
}
