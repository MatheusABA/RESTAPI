"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);


class UserController {



	// index - get all
	async index(req,res) {
		try{
			const users = await _User2.default.findAll({attributes: ['id', 'name', 'email']})
			return res.json(users)	// database response
		} catch (e) {
			return res.status(400).json({ // creating an object if occurs more than 1 error
				errors: e.errors.map((error) => error.message)
			});
		}
	}


	// show - get one
	async show(req,res) {
		try {
			const user = await _User2.default.findByPk(req.params.id)
			if (!user) {
				return res.status(400).json({
					errors: ["User doesn't exist!"]
				})
			}

			return res.json({
				"id"	: user.id,
				"name"	: user.name,
				"email"	: user.email
			})
		} catch (e) {
			res.status(400).json({ // creating an object if occurs more than 1 error
				errors: e.errors.map((error) => error.message)
			});
		}
	}

	// store - post
	async store(req,res) {
		try {
			const newUser = await _User2.default.create({
				name: req.body.name,
				email: req.body.email,
				password: req.body.password
			});
			return res.status(201).json({
				'New user added to database': {
					"id" : newUser.id,
					"name" : newUser.name,
					"email" : newUser.email
				}
			});

		} catch (e) {
			return res.status(401).json({ // returning an object if occurs more than 1 error
				errors: e.errors.map((error) => error.message)
			})
		}

	};


	// update - put
	async update(req,res) {
		try{

			// just for test. Now, just update personal account. Token stored with the currently logged user id
			// if (!req.params.id) {
			// 	return res.status(400).json({
			// 		errors: ['ID not received!']
			// 	})
			// }

			const user = await _User2.default.findByPk(req.userId)

			if (!user) {
				return res.status(400).json({
					errors: ["User doesn't exist!"]
				})
			}

			const newData = await user.update(req.body);
			return res.json({
				"User updated": {
					"id" : newData.id,
					"name" : newData.name,
					"email" : newData.email
					},
		})

		} catch (e) {
			res.status(400).json({ // creating an object if occurs more than 1 error
				errors: e.errors.map((error) => error.message)
			});
		}
	}


	// delete - delete
	async delete(req,res) {
		try{
			// if (!req.params.id) {
			// 	return res.status(400).json({
			// 		errors: ['ID not received!']
			// 	})
			// }
			const user = await _User2.default.findByPk(req.userIdid)

			if (!user) {
				return res.status(400).json({
					errors: ["User doesn't exist!"]
				})
			}

			await user.destroy();

			return res.json(`User deleted`)

		} catch (e) {
			res.status(400).json({ // creating an object if occurs more than 1 error
				errors: e.errors.map((error) => error.message)
			});

		}
	}

}


exports. default = new UserController();
