import { Router } from "express";
import loginToken from '../middlewares/loginToken'

import photoController from '../controllers/PhotoController'

const router = new Router();	// Instance of express.Router()

// ROUTES
router.post('/', loginToken, photoController.store)



export default router;
