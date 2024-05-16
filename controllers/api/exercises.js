module.exports = {
    index,
    // show,
    // create,
    // update,
    // delete: deleteWorkout,
};

async function index(req, res) {
    res.json(res.paginatedResults.results);
}
