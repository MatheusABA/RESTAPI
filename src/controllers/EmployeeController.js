import Employee from '../models/Employee'
import Photo from '../models/Photo';

class EmployeeController {

	async index(req,res) {
		try {
			const employees = await Employee.findAll({
				attributes: ['id','name','email', 'function', 'salary'],
				order: [['id', 'DESC'],[Photo,'id', 'DESC']],
				include: {
					model: Photo,
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

			const employee = await Employee.findByPk(id, {
				attributes: ['id','name','email', 'function', 'salary'],
				order: [['id', 'DESC'],[Photo,'id', 'DESC']],
				include: {
					model: Photo,
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
			const newEmployee = await Employee.create(req.body);

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

			const employee = await Employee.findByPk(id)

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

			const employee = await Employee.findByPk(id)

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


export default new EmployeeController();

