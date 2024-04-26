"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _bcryptjs = require('bcryptjs'); var _bcryptjs2 = _interopRequireDefault(_bcryptjs);

 class User extends _sequelize.Model {
	static init(sequelize) {
		super.init({	// Criando Model através do Sequelize
			name: {
				type: _sequelize2.default.STRING,
				defaultValue: '',
				validate: {
					len: {
						args: [1, 50],
						msg: 'Name must have between 1 and 50 characters'
					}
				}
			},
			email:  {
				type: _sequelize2.default.STRING,
				defaultValue: '',
				unique: {
					msg: "Email already used!"
				},
				validate: {
					isEmail: {
						msg: 'Invalid email!'
					}
				}
			},
			password_hash:  {
				type: _sequelize2.default.STRING,
				defaultValue: '',
			},
			password:  {
				type: _sequelize2.default.VIRTUAL,
				defaultValue: '',
				validate: {
					len: {
						args: [6, 50],
						msg: 'Password must have between 6 and 50 characteres'
					}
				}
			},
		}, {
			sequelize,
		});
		this.addHook('beforeSave', async user => {
			if(user.password) {
				user.password_hash = await _bcryptjs2.default.hash(user.password, 8)
			}
		});
		return this;
	}

	passwordIsValid(password) {		// check if password matches - returns a promise
		return _bcryptjs2.default.compare(password, this.password_hash);
	}
} exports.default = User;
