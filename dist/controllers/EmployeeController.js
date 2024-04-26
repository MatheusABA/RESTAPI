"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Employee = require('../models/Employee'); var _Employee2 = _interopRequireDefault(_Employee);
var _Photo = require('../models/Photo'); var _Photo2 = _interopRequireDefault(_Photo);

class EmployeeController {

	async index(req,res) {
		try {
			const employees = await _Employee2.default.findAll({
				attributes: ['id','name','email', 'function', 'salary'],
				order: [['id', 'DESC'],[_Photo2.default,'id', 'DESC']],
				include: {
					model: _Photo2.default,
					attributes: ['filename','url']
				}
		});
			res.json(employees);
		} catch (e) {
			res.status(401).json(e)
		}
	}

	async show(req,res) {
		try {
			const { id } = req.params;

			if(!id) {
				return res.status(400).json({
					errors: ['ID is missing!']
				})
			}

			const employee = await _Employee2.default.findByPk(id, {
				attributes: ['id','name','email', 'function', 'salary'],
				order: [['id', 'DESC'],[_Photo2.default,'id', 'DESC']],
				include: {
					model: _Photo2.default,
					attributes: ['filename','url']
				}
			})

			if(!employee) {
				return res.status(400).json({
					errors: ["Employee doesn't exist!"]
				});
			}

			return res.json({employee})


		} catch (e) {
			return res.status(400).json({
				errors: e.errors.map((error) => error.message)
			})
		}
	}

	async store(req,res) {
		try {
			const newEmployee = await _Employee2.default.create(req.body);

			return res.status(201).json({
				"New employee added to database": {
					"id": newEmployee.id,
					"name": newEmployee.name,
					"email": newEmployee.email,
					"function": newEmployee.function
				}
			});

		} catch (e) {
			return res.status(400).json({
				errors: e.errors.map((error) => error.message)
			})
		}
	}

	async update(req,res) {
		try {
			const { id } = req.params;

			if(!id) {
				return res.status(400).json({
					errors: ['ID is missing!']
				})
			}

			const employee = await _Employee2.default.findByPk(id)

			if(!employee) {
				return res.status(400).json({
					errors: ["Employee doesn't exist!"]
				});
			}

			const newData = await employee.update(req.body);
			return res.json({
				"User updated": {
					"id": newData.id,
					"name": newData.name,
					"function": newData.function
				}
			})



		} catch (e) {
			return res.status(400).json({
				errors: e.errors.map((error) => error.message)
			})
		}
	}

	async delete(req,res) {
		try {
			const { id } = req.params;

			if(!id) {
				return res.status(400).json({
					errors: ['ID is missing!']
				})
			}

			const employee = await _Employee2.default.findByPk(id)

			if(!employee) {
				return res.status(400).json({
					errors: ["Employee doesn't exist!"]
				});
			}

			await employee.destroy();
			return res.status(200).json(`Employee ${employee.name} ${employee.lastname} - ID(${employee.id}) deleted!`)
		} catch (e) {
			return res.status(400).json({
				errors: e.errors.map((error) => error.message)
			})
		}
	}

}


exports. default = new EmployeeController();

