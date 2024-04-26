"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _jsonwebtoken = require('jsonwebtoken'); var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);
var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

exports. default = async(req,res, next) => {
	const { authorization } = req.headers;

	if(!authorization) {
		return res.status(401).json({
			errors: ['Unauthorized. Login required!'],
		})
	}

	const [ token ] = authorization.split(' ')

	try {
		const data = _jsonwebtoken2.default.verify(token, process.env.TOKEN_ID);
		const { id, email } = data;

		// if email changes, logout, need to restore token trought login again
		const user = await _User2.default.findOne({
			where: {
				id,
				email
			}}
		);

		if(!user) {
			return res.status(401).json({
				errors: ["Unauthorized!"]
			})
		}

		req.userId = id;
		req.userEmail = email;
		return next();
	} catch (e) {
		return res.status(401).json({
			errors: ['Unauthorized. Token expired or invalid!'],
		})
	}
}


// Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MjIsImVtYWlsIjoibWF0aGV1cy5hYmFAZ21haWwuY29tIiwiaWF0IjoxNzEzODEyNDU2LCJleHAiOjE3MTQwNzE2NTZ9.64Px2vwA-y2advXNHONskhlngKuSgjJAkUH8xr1kkHc