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
  if(!req.params.id){
    res
      .status(400)
      .json({"message" : "id cannot be empty"});
      return;
  }
  const workoutId = req.params.id;
  WorkoutProgram.findById(workoutId).then(workout => {
    res.status(200);
    res.json(workout);
    return;
  });
  return;
};

//Add new workout program
workoutController.addNewWorkout = (req, res) => {
  if(!req.body.name || req.body.name === ''){
    res
      .status(400)
      .json({"message" : "name cannot be empty"});
      return;
  }
  const newWorkout = new WorkoutProgram({
    name : req.body.name
  });
  newWorkout.save();
  res
    .status(200)
    .json({"message" : "Workout was saved", "workout" : newWorkout});
  return;
}

workoutController.addNewExercise = (req, res) => {
  if(!req.body.name || !req.body.description || 
    !req.body.set || !req.body.duration){
      res
        .status(400)
        .json({"message" : "Request must include id, exercise_name, description, set, and duration"});
      return;
    }

  const newExercise = new ExcerciseSchema();
  newExercise.name = req.body.name,
  newExercise.description = req.body.description,
  newExercise.set = req.body.num_per_set,
  newExercise.duration = req.body.duration
  
  WorkoutProgram.findByIdAndUpdate(req.params.id, {
    $addToSet: { excercises: newExercise },
  }).then(() => {
    res
      .status(200)
      .json({"message" : "Excercise was saved", "exercise" : newExercise});
      return;
  });
  return;
}

export default workoutController;
