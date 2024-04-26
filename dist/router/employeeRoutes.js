"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _EmployeeController = require('../controllers/EmployeeController'); var _EmployeeController2 = _interopRequireDefault(_EmployeeController);

// to verify login
var _loginToken = require('../middlewares/loginToken'); var _loginToken2 = _interopRequireDefault(_loginToken);

const router = new (0, _express.Router)();	// Instance of express.Router()


// ROUTES
router.get('/', _EmployeeController2.default.index)
router.get('/:id', _EmployeeController2.default.show)
router.post('/', _loginToken2.default,_EmployeeController2.default.store)
router.put('/:id', _loginToken2.default,_EmployeeController2.default.update)
router.delete('/:id', _loginToken2.default,_EmployeeController2.default.delete)



exports. default = router;
