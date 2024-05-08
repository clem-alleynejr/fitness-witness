const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');

// // GET /api/workouts/unsavedWorkout
// router.get('/unsavedWorkout', workoutsCtrl.unsavedWorkout);
// // POST /api/workouts/unsavedWorkout/exercises/:id
// router.post('/unsavedWorkout/exercises/:id', workoutsCtrl.addToUnsavedWorkout);
// // POST /api/workouts/unsavedWorkout/saveWorkout
// router.post('/unsavedWorkout/saveUnsavedWorkout', workoutsCtrl.saveUnsavedWorkout);
// // PUT /api/workouts/unsavedWorkout/WorkoutName
// router.put('/unsavedWorkout/WorkoutName', workoutsCtrl.setWorkoutName);
// // PUT /api/workouts/unsavedWorkout/setQty
// router.put('/unsavedWorkout/setQty', workoutsCtrl.setSetQtyInUnsavedWorkout);
// // PUT /api/workouts/unsavedWorkout/repQty
// router.put('/unsavedWorkout/repQty', workoutsCtrl.setRepQtyInUnsavedWorkout);

router.get('/', workoutsCtrl.index);
router.get('/new', workoutsCtrl.new);
router.get('/:id', workoutsCtrl.show);
router.get('/:id/edit', workoutsCtrl.edit);

router.post('/', workoutsCtrl.create);

router.put('/:id', workoutsCtrl.update)

router.delete('/:id', workoutsCtrl.delete)

module.exports = router;

