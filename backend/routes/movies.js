const express = require('express');
const router = express.Router();
const Movie = require('../models/Movie');

// GET /api/movies - Filtered & paginated movies list
router.get('/', async (req, res) => {
    try {
        const page = parseInt(req.query.page) || 1;
        const limit = parseInt(req.query.limit) || 16;
        const skip = (page - 1) * limit;

        const { search, type, genre, year, language, minRating, sortBy } = req.query;
        const query = {};

        if (search) {
            query.title = { $regex: search, $options: 'i' };
        }
        if (type && type !== 'All' && type !== 'All Media') {
            query.type = type;
        }
        if (genre && genre !== 'All') {
            query.genres = genre;
        }
        if (year && year !== 'All') {
            query.year = parseInt(year);
        }
        if (language && language !== 'All') {
            query.languages = language;
        }
        if (minRating) {
            query['imdb.rating'] = { $gte: parseFloat(minRating) };
        }

        let sortOption = { 'imdb.rating': -1, year: -1 };
        if (sortBy === 'year-desc') sortOption = { year: -1 };
        if (sortBy === 'year-asc') sortOption = { year: 1 };
        if (sortBy === 'title') sortOption = { title: 1 };

        const movies = await Movie.find(query)
            .sort(sortOption)
            .skip(skip)
            .limit(limit);

        const totalMovies = await Movie.countDocuments(query);

        res.json({
            movies,
            page,
            totalPages: Math.ceil(totalMovies / limit),
            totalMovies,
        });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/movies/suggest - Random movie recommendation
router.get('/suggest', async (req, res) => {
    try {
        const randomMovie = await Movie.aggregate([
            { $match: { poster: { $exists: true, $ne: null }, 'imdb.rating': { $gte: 7.0 } } },
            { $sample: { size: 1 } }
        ]);

        if (!randomMovie || randomMovie.length === 0) {
            const fallback = await Movie.findOne().sort({ 'imdb.rating': -1 });
            return res.json(fallback);
        }

        res.json(randomMovie[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/movies/types - List distinct media types
router.get('/types', async (req, res) => {
    try {
        const types = await Movie.distinct('type');
        res.json(types.filter(Boolean).sort());
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/movies/genres - List all distinct genres
router.get('/genres', async (req, res) => {
    try {
        const genres = await Movie.distinct('genres');
        res.json(genres.filter(Boolean).sort());
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET /api/movies/:id - Get single movie details
router.get('/:id', async (req, res) => {
    try {
        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ error: 'Movie not found' });
        res.json(movie);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// PUT /api/movies/:id - Update poster or media details
router.put('/:id', async (req, res) => {
    try {
        const updatedMovie = await Movie.findByIdAndUpdate(
            req.params.id,
            { $set: req.body },
            { new: true, runValidators: true }
        );
        if (!updatedMovie) return res.status(404).json({ error: 'Movie not found' });
        res.json({ message: 'Movie updated successfully', movie: updatedMovie });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// POST /api/movies/:id/rate - Submit user rating (1-10)
router.post('/:id/rate', async (req, res) => {
    try {
        const { score } = req.body;
        const parsedScore = Number(score);

        if (!parsedScore || parsedScore < 1 || parsedScore > 10) {
            return res.status(400).json({ error: 'Rating score must be a number between 1 and 10' });
        }

        const movie = await Movie.findById(req.params.id);
        if (!movie) return res.status(404).json({ error: 'Movie not found' });

        await movie.addUserRating(parsedScore);
        res.json({ message: 'Rating saved successfully', movie });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

module.exports = router;
