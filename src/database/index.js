import { Sequelize } from "sequelize";
import database from "../config/database";
import Employee from '../models/Employee'
import User from '../models/User'
import Photo from "../models/Photo";

const models = [Employee, User, Photo];

const connection = new Sequelize(database);

models.forEach((model) => model.init(connection));
models.forEach((model) => model.associate && model.associate(connection.models));

