import express from 'express';
var router = express.Router();

// import controlers
import workoutController from '../controllers/workoutController';
import userController from '../controllers/userController';

/**
 * Router
 * map every request to controller
 */
router.get('/workouts', workoutController.list);

router.get('/workouts/:id', workoutController.detail);

router.post('/workouts', workoutController.addNewWorkout);

router.post('/workouts/:id', workoutController.addNewExercise);

router.post('/register', userController.register);

router.post('/login', userController.login);

// export the router
export default router;
