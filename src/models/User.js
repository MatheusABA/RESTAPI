import Sequelize, { Model } from 'sequelize';
import bcryptjs from 'bcryptjs'

export default class User extends Model {
	static init(sequelize) {
		super.init({	// Criando Model através do Sequelize
			name: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					len: {
						args: [1, 50],
						msg: 'Name must have between 1 and 50 characters'
					}
				}
			},
			email:  {
				type: Sequelize.STRING,
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
				type: Sequelize.STRING,
				defaultValue: '',
			},
			password:  {
				type: Sequelize.VIRTUAL,
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
				user.password_hash = await bcryptjs.hash(user.password, 8)
			}
		});
		return this;
	}

	passwordIsValid(password) {		// check if password matches - returns a promise
		return bcryptjs.compare(password, this.password_hash);
	}
}
