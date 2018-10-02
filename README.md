# API Specs

## current state:

- /api/
  - GET /workouts/ - get all workouts
  - GET /workouts/{id}

## endpoints to be implemented:

points with \* should be protected

- /api/

  - POST /login - will return { "token": JWT, "name": name, "surname": surname }
  - POST /register - will return { "token": JWT, "name": name, "surname": surname }

  - GET /workouts - will return list of workouts { "workouts": workout[] }
  - - POST /workouts - create a new workout, return { "message": "Workout was saved" }

  - - POST /workouts/{id}/excercises - create new excercise, return { "message": "Excercise was saved" }

  - - GET /workout-log - return list of tracked workouts (unique for each user) - { "date": date, "workout": workout }
  - - POST /workout-log - add a new log entry, return { "message": "Log was saved" }
