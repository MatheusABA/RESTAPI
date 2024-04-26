"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _UserController = require('../controllers/UserController'); var _UserController2 = _interopRequireDefault(_UserController);
var _loginToken = require('../middlewares/loginToken'); var _loginToken2 = _interopRequireDefault(_loginToken);

const router = new (0, _express.Router)();	// Instance of express.Router()


// ROUTES

// not required in a real system - just for example
router.get('/',  _UserController2.default.index)				// get all users
// router.get('/:id', userController.show)				// get by id


router.post('/', _UserController2.default.store)				// create user
router.put('/', _loginToken2.default, _UserController2.default.update)			// update personal account
router.delete('/', _loginToken2.default, _UserController2.default.delete)		// delete personal account

/**
index -> lista todos	-> get
store, create -> cria	-> post
delete -> apaga			-> delete
show -> mostra um		-> get
update -> atualiza		-> patch/put
*/

exports. default = router;
