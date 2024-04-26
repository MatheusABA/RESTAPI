"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express');
var _HomeController = require('../controllers/HomeController'); var _HomeController2 = _interopRequireDefault(_HomeController);

const router = new (0, _express.Router)();	// Instance of express.Router()


// ROUTES
router.get('/', _HomeController2.default.index)
// router.get('/:id', homeController.show)
router.post('/', _HomeController2.default.store)



exports. default = router;
