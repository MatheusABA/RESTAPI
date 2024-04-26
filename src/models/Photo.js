import Sequelize, { Model } from 'sequelize';
import appcfg from '../config/appcfg'

export default class Photo extends Model {
	static init(sequelize) {
		super.init({	// Criando Model através do Sequelize
			originalname: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					notEmpty: {
						msg: 'Original name cannot be empty'
					}
				}
			},
			filename: {
				type: Sequelize.STRING,
				defaultValue: '',
				validate: {
					notEmpty: {
						msg: 'Filename cannot be empty'
					}
				}
			},
			url: {
				type: Sequelize.VIRTUAL,
				get() {
					return `${appcfg.url}/images/${this.getDataValue('filename')}`
				},
			},
		}, {
			sequelize,
			tableName: 'photos',
		});
		return this;


	}
	static associate(models) {
		this.belongsTo(models.Employee, { foreignKey: 'employee_id'})
	}
}
