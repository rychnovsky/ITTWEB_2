/**
 * Workout controller
 */
import WorkoutProgram from '../models/workoutProgram';

let workoutController = {};

// show list of all workout programs
workoutController.list = (req, res) => {
  WorkoutProgram.find().then(workouts => {
    res.status(200);
    res.json(workouts);
  });
};

// show detail of one workout program
workoutController.detail = (req, res) => {
  const workoutId = req.params.id;
  WorkoutProgram.findById(workoutId).then(workout => {
    res.status(200);
    res.json(workout);
  });
};

export default workoutController;
