import User from '../models/User'
import jwt from 'jsonwebtoken'


class TokenController {

	async store(req,res) {
		const { email='', password=''} = req.body;

		if(!email || !password) {
			return res.status(401).json({
				errors: ['Unauthorized Credentials!']
			})
		}

		const user = await User.findOne({ where: { email }})

		if(!user) {
			return res.status(401).json({
				errors: ['User doesn`t exist!']
			})
		}

		if(!(await user.passwordIsValid(password))) {
			return res.status(401).json({
				errors: ['Invalid password!']
			})
		}

		const { id } = user;
		const token = jwt.sign({ id, email }, process.env.TOKEN_ID, {
			expiresIn: process.env.TOKEN_EXPIRATION,
		});

		return res.json({token, user: {nome: user.name, id, email}})
	}

}


export default new TokenController();
