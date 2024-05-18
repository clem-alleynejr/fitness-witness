const express = require('express');
const router = express.Router();
const workoutsCtrl = require('../../controllers/api/workouts');

router.get('/', workoutsCtrl.index);
router.get('/:id', workoutsCtrl.show);

router.post('/', workoutsCtrl.create);

router.put('/:id', workoutsCtrl.update)

router.delete('/:id', workoutsCtrl.delete)

module.exports = router;

