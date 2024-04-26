"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _loginToken = require('../middlewares/loginToken'); var _loginToken2 = _interopRequireDefault(_loginToken);

var _PhotoController = require('../controllers/PhotoController'); var _PhotoController2 = _interopRequireDefault(_PhotoController);

const router = new (0, _express.Router)();	// Instance of express.Router()

// ROUTES
router.post('/', _loginToken2.default, _PhotoController2.default.store)



exports. default = router;
