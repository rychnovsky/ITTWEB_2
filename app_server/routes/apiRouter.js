import express from 'express';
var router = express.Router();

// import controlers
import workoutController from '../controllers/workoutController';
import userController from '../controllers/userController';

/**
 * Router
 * map every request to controller
 */
router.route('/workouts').get(workoutController.list);

router.route('/workouts/:id').get(workoutController.detail);

//TODO make sure this is done right
router.post('/register', userController.register);

router.post('/login', userController.login);
// export the router
export default router;
