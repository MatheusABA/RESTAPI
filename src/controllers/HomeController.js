import Employee from '../models/Employee'


class HomeController {


	// store - post
	async store(req,res) {
		try {
			const newEmployee = await Employee.create({
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
			const employees = await Employee.findAll()
			return res.json(employees)	// database response
		} catch (e) {
			return res.status(400).json({ // creating an object if occurs more than 1 error
				errors: e.errors.map((error) => error.message)
			});
		}
	}
}


export default new HomeController();
