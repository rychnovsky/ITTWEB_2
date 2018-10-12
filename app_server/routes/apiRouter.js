import express from 'express';
var router = express.Router();
var jwt = require('express-jwt');
//TODO find why process.env.JWT_SECRET is undefined here but not in user.js
var auth = jwt({
    secret : 'sg9GXMkYfN46kwkguR7AyphtUGbgABrP',
    userProperty : 'payload'
});

// import controlers
import workoutController from '../controllers/workoutController';
import userController from '../controllers/userController';

/**
 * Router
 * map every request to controller
 */
router.get('/workouts', workoutController.list);

router.get('/workouts/:id', workoutController.detail);

router.post('/workouts', auth, workoutController.addNewWorkout);

router.post('/workouts/:id', auth, workoutController.addNewExercise);

router.post('/register', userController.register);

router.post('/login', userController.login);

// export the router
export default router;
