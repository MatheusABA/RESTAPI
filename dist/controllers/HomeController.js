"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _Employee = require('../models/Employee'); var _Employee2 = _interopRequireDefault(_Employee);


class HomeController {


	// store - post
	async store(req,res) {
		try {
			const newEmployee = await _Employee2.default.create({
			name: req.body.name,
			lastname: req.body.lastname,
			email: req.body.email,
			age: req.body.age,
			function: req.body.function,
			salary: req.body.salary,
			})

			return res.status(201).json("New user added to database", newEmployee);
		} catch (e) {
			return res.status(400).json({ // creating an object if occurs more than 1 error
				errors: e.errors.map((error) => error.message)
			});
		}
	};


	// index - get
	async index(req,res) {
		try{
			const employees = await _Employee2.default.findAll()
			return res.json(employees)	// database response
		} catch (e) {
			return res.status(400).json({ // creating an object if occurs more than 1 error
				errors: e.errors.map((error) => error.message)
			});
		}
	}
}


exports. default = new HomeController();
