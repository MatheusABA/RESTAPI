import dotenv from 'dotenv';
dotenv.config();

import './config/database';
import './database/';

import {resolve} from 'path'
import express from 'express';
// ROUTES
import homeRoutes from './router/homeRoutes'
import userRoutes from './router/userRoutes'
import tokenRoutes from './router/tokenRoutes'
import employeeRoutes from './router/employeeRoutes'
import photoRoutes from './router/photoRoutes'

class App {


	constructor() {
		this.app = express();	// creation of express server
		this.middlewares();		// use of middlewares
		this.routes();			// set of routes that will be used
	};


	middlewares() {
		// set app to use middlewares
		this.app.use(express.urlencoded({ extended: true }));
		this.app.use(express.json());
		this.app.use(express.static(resolve(__dirname, 'uploads')))
	}


	routes() {		// routes that will be used
		this.app.use('/', homeRoutes);				// home
		this.app.use('/users/', userRoutes)			// users
		this.app.use('/tokens/', tokenRoutes)		// tokens
		this.app.use('/employees/', employeeRoutes)	// employees
		this.app.use('/photos/', photoRoutes)		// photos
	}



}

// Exporting express server app
export default new App().app;
