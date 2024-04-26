"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _multer = require('multer'); var _multer2 = _interopRequireDefault(_multer);
var _multercfg = require('../config/multercfg'); var _multercfg2 = _interopRequireDefault(_multercfg);

var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

const upload = _multer2.default.call(void 0, _multercfg2.default).single('photo');

class PhotoController {

	store(req,res) {
		return upload(req, res, async (error) => {
			if(error) {
				return res.status(400).json({
					errors: [error.code],
				});
			}

			try {
				// console.log(req.body,req.file)
				const { originalname, filename } = req.file;
				const { employee_id } = req.body;
				const photo = await _Photo2.default.create({ originalname, filename, employee_id })

				return res.json(photo);

			} catch (e) {
				return res.status(400).json({errors: 'Employee doesn`t exist!'})
			}
		});
	}
}

exports. default = new PhotoController();
