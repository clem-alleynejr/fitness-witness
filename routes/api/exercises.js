const express = require("express");
const router = express.Router();
const exercisesCtrl = require("../../controllers/api/exercises");
const filterAndPaginateResults = require("../../src/utilities/filterAndPaginateResults");
const { Exercise } = require("../../models/exercise");

router.get("/", filterAndPaginateResults(Exercise), exercisesCtrl.index);
// router.get('/:id', exercisesCtrl.show);

// router.post('/', exercisesCtrl.create);

// router.put('/:id', exercisesCtrl.update)

// router.delete('/:id', exercisesCtrl.delete)

module.exports = router;
