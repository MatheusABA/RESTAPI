"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _sequelize = require('sequelize'); var _sequelize2 = _interopRequireDefault(_sequelize);
var _appcfg = require('../config/appcfg'); var _appcfg2 = _interopRequireDefault(_appcfg);

 class Photo extends _sequelize.Model {
	static init(sequelize) {
		super.init({	// Criando Model através do Sequelize
			originalname: {
				type: _sequelize2.default.STRING,
				defaultValue: '',
				validate: {
					notEmpty: {
						msg: 'Original name cannot be empty'
					}
				}
			},
			filename: {
				type: _sequelize2.default.STRING,
				defaultValue: '',
				validate: {
					notEmpty: {
						msg: 'Filename cannot be empty'
					}
				}
			},
			url: {
				type: _sequelize2.default.VIRTUAL,
				get() {
					return `${_appcfg2.default.url}/images/${this.getDataValue('filename')}`
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
} exports.default = Photo;
