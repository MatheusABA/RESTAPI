import { Router } from "express";
import homeController from '../controllers/HomeController'

const router = new Router();	// Instance of express.Router()


// ROUTES
router.get('/', homeController.index)
// router.get('/:id', homeController.show)
router.post('/', homeController.store)



export default router;
