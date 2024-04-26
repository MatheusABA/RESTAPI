import { Router } from "express";
import tokenController from '../controllers/TokenController'

const router = new Router();	// Instance of express.Router()


// ROUTES
router.post('/', tokenController.store)




export default router;
