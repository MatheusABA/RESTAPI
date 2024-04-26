"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
_dotenv2.default.config();

require('./config/database');
require('./database/');

var _path = require('path');
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
// ROUTES
var _homeRoutes = require('./router/homeRoutes'); var _homeRoutes2 = _interopRequireDefault(_homeRoutes);
var _userRoutes = require('./router/userRoutes'); var _userRoutes2 = _interopRequireDefault(_userRoutes);
var _tokenRoutes = require('./router/tokenRoutes'); var _tokenRoutes2 = _interopRequireDefault(_tokenRoutes);
var _employeeRoutes = require('./router/employeeRoutes'); var _employeeRoutes2 = _interopRequireDefault(_employeeRoutes);
var _photoRoutes = require('./router/photoRoutes'); var _photoRoutes2 = _interopRequireDefault(_photoRoutes);

class App {


	constructor() {
		this.app = _express2.default.call(void 0, );	// creation of express server
		this.middlewares();		// use of middlewares
		this.routes();			// set of routes that will be used
	}


	middlewares() {
		// set app to use middlewares
		this.app.use(_express2.default.urlencoded({ extended: true }));
		this.app.use(_express2.default.json());
		this.app.use(_express2.default.static(_path.resolve.call(void 0, __dirname, 'uploads')))
	}


	routes() {		// routes that will be used
		this.app.use('/', _homeRoutes2.default);				// home
		this.app.use('/users/', _userRoutes2.default)			// users
		this.app.use('/tokens/', _tokenRoutes2.default)		// tokens
		this.app.use('/employees/', _employeeRoutes2.default)	// employees
		this.app.use('/photos/', _photoRoutes2.default)		// photos
	}



}

// Exporting express server app
exports. default = new App().app;
