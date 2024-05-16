const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../../controllers/api/exercises');

router.get('/', exercisesCtrl.index);
// router.get('/:id', exercisesCtrl.show);

// router.post('/', exercisesCtrl.create);

// router.put('/:id', exercisesCtrl.update)

// router.delete('/:id', exercisesCtrl.delete)

module.exports = router;