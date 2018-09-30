import express from 'express';
var router = express.Router();

// import controlers
import workoutController from '../controllers/workoutController';

/**
 * Router
 * map every request to controller
 */
router.route('/workouts').get(workoutController.list);

router.route('/workouts/:id').get(workoutController.detail);

// export the router
export default router;
