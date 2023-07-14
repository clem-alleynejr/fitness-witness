import sendRequest from './send-request';

const BASE_URL = '/api/workouts';

// Retrieve an unsaved workout for the logged in user
export function getUnsavedWorkout() {
  return sendRequest(`${BASE_URL}/unsavedWorkout`);
}

// Add an exercise to the unsaved workout
export function addWorkoutToUnsavedWorkout(exerciseId) {
  return sendRequest(`${BASE_URL}/unsavedWorkout/exercises/${workoutId}`, 'POST');
}

// Update the exercise's number of sets in the unsaved workout
export function setExerciseSetQtyInUnsavedWorkout(exerciseId, newSetQty) {
  return sendRequest(`${BASE_URL}/unsavedWorkout/setQty`, 'PUT', { exerciseId, newSetQty });
}

// Update the exercise's number of reps in the unsaved workout
export function setExerciseRepQtyInUnsavedWorkout(exerciseId, newSetQty) {
  return sendRequest(`${BASE_URL}/unsavedWorkout/repQty`, 'PUT', { exerciseId, newRepQty });
}

// Updates the unsaved Workout's isSaved property to true (turning it into a saved workout)
export function saveWorkout() {
  // Changing data on the server, so make it a POST request
  return sendRequest(`${BASE_URL}/unsavedWorkout/saveWorkout`, 'POST');
}