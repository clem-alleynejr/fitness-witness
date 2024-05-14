import sendRequest from './send-request';

const BASE_URL = '/api/workouts';

 export function getAll() {
   return sendRequest(BASE_URL);
 }











// Retrieve an unsaved workout for the logged in user
export function getUnsavedWorkout() {
  return sendRequest(`${BASE_URL}/unsavedWorkout`);
}

// Add an exercise to the unsaved workout
export function addExerciseToUnsavedWorkout(exerciseId) {
  return sendRequest(`${BASE_URL}/unsavedWorkout/exercises/${exerciseId}`, 'POST');
}

// Update Workout Name
export function setWorkoutName(workoutId, newWorkoutName) {
  return sendRequest(`${BASE_URL}/unsavedWorkout/WorkoutName`, 'PUT', { workoutId, newWorkoutName });
}


// Update the exercise's number of sets in the unsaved workout
export function setExerciseSetQtyInUnsavedWorkout(exerciseId, newSetQty) {
  return sendRequest(`${BASE_URL}/unsavedWorkout/setQty`, 'PUT', { exerciseId, newSetQty });
}

// Update the exercise's number of reps in the unsaved workout
export function setExerciseRepQtyInUnsavedWorkout(exerciseId, newRepQty) {
  return sendRequest(`${BASE_URL}/unsavedWorkout/repQty`, 'PUT', { exerciseId, newRepQty });
}

// Updates the unsaved Workout's isSaved property to true (turning it into a saved workout)
export function saveUnsavedWorkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/unsavedWorkout/saveUnsavedWorkout`, 'POST');
}

// // Retrieve all saved workouts for the logged in user
// export function getAll() {
//   return sendRequest(BASE_URL)
// }

// Delete a workout from a user's saved workout list
export function deleteSavedWorkout(workoutId) {
  return sendRequest(`${BASE_URL}/${workoutId}`, 'DELETE')
}

// Update a saved workout (changing "isSaved" to false)
export function editWorkout(workoutId) {
  return sendRequest(`${BASE_URL}/editWorkout`, 'PUT', { workoutId })
}
