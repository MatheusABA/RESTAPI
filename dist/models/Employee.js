"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);

 class Employee extends _sequelize.Model {
	static init(sequelize) {
		super.init({	// Criando Model através do Sequelize
			name: {
				type: _sequelize2.default.STRING,
				defaultValue: '',
				validate: {
					len: {
						args: [3, 100],
						msg: 'Name must have between 3 and 100 characters'
					}
				}
			},
			lastname: {
				type: _sequelize2.default.STRING,
				defaultValue: '',
				validate: {
					len: {
						args: [3, 100],
						msg: 'Lastname must have between 3 and 100 characters'
					}
				}
			},
			email:	{
				type: _sequelize2.default.STRING,
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
				type:_sequelize2.default.INTEGER,
				defaultValue: '',
				validate: {
					isInt: {
						msg: 'Age must be an integer'
					}
				}
			},
			function: {
				type: _sequelize2.default.STRING,
				defaultValue: '',
				validate: {
					isAlpha: {
						msg: 'Employee function must be only text'
					}

				}
			},
			salary: {
				type: _sequelize2.default.DECIMAL,
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
} exports.default = Employee;
