function searchInResults(model) {
    return async (req, res, next) => { 
        const query = req.query.query || '';

        try {
            const searchResults = await model.find({ name: { $regex: query, $options: 'i' } });
            res.searchResults = searchResults;
            next();
          } catch (e) {
            res.status(500).json({ message: e.message });
          }
    }
}

module.exports = searchInResults;
