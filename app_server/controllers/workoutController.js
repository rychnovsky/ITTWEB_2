/**
 * Workout controller
 */
import WorkoutProgram from '../models/workoutProgram';
import ExcerciseSchema from '../models/excercise';

let workoutController = {};

// show list of all workout programs
workoutController.list = (req, res) => {
  WorkoutProgram.find().then(workouts => {
    res.status(200);
    res.json(workouts);
    return;
  });
  return;
};

// show detail of one workout program
workoutController.detail = (req, res) => {
  if(!req.body.id){
    res
      .status(400)
      .json({"message" : "id cannot be empty"});
      return;
  }
  const workoutId = req.body.id;
  WorkoutProgram.findById(workoutId).then(workout => {
    res.status(200);
    res.json(workout);
    return;
  });
  return;
};

//Add new workout program
workoutController.addNewWorkout = (req, res) => {
  if(!req.body.workout_name || req.body.workout_name === ''){
    res
      .status(400)
      .json({"message" : "workout_name cannot be empty"});
      return;
  }
  const newWorkout = new WorkoutProgram({
    name : req.body.workout_name
  });
  newWorkout.save();
  res
    .status(200)
    .json({"message" : "Workout was saved"});
  return;
}

workoutController.addNewExercise = (req, res) => {
  if(!req.body.id || !req.body.exercise_name || !req.body.description || 
    !req.body.set || !req.body.duration){
      res
        .status(400)
        .json({"message" : "Request must include id, exercise_name, description, set, and duration"});
      return;
    }

  const newExercise = new ExcerciseSchema();
  newExercise.name = req.body.exercise_name,
  newExercise.description = req.body.description,
  newExercise.set = req.body.num_per_set,
  newExercise.duration = req.body.duration
  
  WorkoutProgram.findByIdAndUpdate(req.body.id, {
    $addToSet: { excercises: newExercise },
  }).then(() => {
    res
      .status(200)
      .json({"message" : "Excercise was saved"});
      return;
  });
  return;
}

export default workoutController;
