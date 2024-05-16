const { Exercise } = require("../../models/exercise");

module.exports = {
    index,
    // show,
    // create,
    // update,
    // delete: deleteWorkout,
};

async function index(req, res) {
    const page = parseInt(req.query.page);
    const limit = parseInt(req.query.limit);

    const exercises = await Exercise.find({});

    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;

    const results = {};

    results.next = {
        page: page + 1,
        limit: limit,
    };

    results.previous = {
        page: page - 1,
        limit: limit,
    };

    results.results = exercises.slice(startIndex, endIndex);
    res.json(results.results);
}
