import { Router } from "express";
import employeeController from '../controllers/EmployeeController'

// to verify login
import loginToken from '../middlewares/loginToken'

const router = new Router();	// Instance of express.Router()


// ROUTES
router.get('/', employeeController.index)
router.get('/:id', employeeController.show)
router.post('/', loginToken,employeeController.store)
router.put('/:id', loginToken,employeeController.update)
router.delete('/:id', loginToken,employeeController.delete)



export default router;
