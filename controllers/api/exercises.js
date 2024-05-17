module.exports = {
    index,
    // show,
    // create,
    // update,
    // delete: deleteExercise,
};

async function index(req, res) {
    res.json(res.filteredAndPaginatedResults.results);
}
