import { Router } from "express";
import userController from '../controllers/UserController'
import loginToken from "../middlewares/loginToken";

const router = new Router();	// Instance of express.Router()


// ROUTES

// not required in a real system - just for example
router.get('/',  userController.index)				// get all users
// router.get('/:id', userController.show)				// get by id


router.post('/', userController.store)				// create user
router.put('/', loginToken, userController.update)			// update personal account
router.delete('/', loginToken, userController.delete)		// delete personal account

/**
index -> lista todos	-> get
store, create -> cria	-> post
delete -> apaga			-> delete
show -> mostra um		-> get
update -> atualiza		-> patch/put
*/

export default router;
