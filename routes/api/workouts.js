const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');

// GET /api/workouts/unsavedWorkout
router.get('/unsavedWorkout', workoutsCtrl.unsavedWorkout);
// POST /api/workouts/unsavedWorkout/exercises/:id
router.post('/unsavedWorkout/exercises/:id', workoutsCtrl.addToUnsavedWorkout);
// POST /api/workouts/unsavedWorkout/saveWorkout
router.post('/unsavedWorkout/saveUnsavedWorkout', workoutsCtrl.saveUnsavedWorkout);
// PUT /api/workouts/unsavedWorkout/setQty
router.put('/unsavedWorkout/setQty', workoutsCtrl.setSetQtyInUnsavedWorkout);
// PUT /api/workouts/unsavedWorkout/repQty
router.put('/unsavedWorkout/repQty', workoutsCtrl.setRepQtyInUnsavedWorkout);

router.get('/', workoutsCtrl.index);
router.delete('/:id', workoutsCtrl.deleteSavedWorkout)

module.exports = router;

