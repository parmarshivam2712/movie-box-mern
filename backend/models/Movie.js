const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    type: {
        type: String,
        enum: ['Movie', 'TV Show', 'Anime'],
        default: 'Movie',
        index: true,
    },
    year: {
        type: Number,
        index: true,
    },
    seasons: {
        type: Number,
    },
    episodes: {
        type: Number,
    },
    genres: [{
        type: String,
        trim: true,
        index: true,
    }],
    languages: [{
        type: String,
        trim: true,
    }],
    plot: {
        type: String,
        trim: true,
    },
    fullplot: {
        type: String,
        trim: true,
    },
    poster: {
        type: String,
        trim: true,
    },
    cast: [{
        type: String,
        trim: true,
    }],
    directors: [{
        type: String,
        trim: true,
    }],
    imdb: {
        rating: { type: Number, default: 0 },
        votes: { type: Number, default: 0 },
        id: { type: Number },
    },
    userRatings: [{
        score: { type: Number, required: true, min: 1, max: 10 },
        createdAt: { type: Date, default: Date.now }
    }],
    userAverageRating: {
        type: Number,
        default: 0,
    }
}, { timestamps: true });

// Helper instance method to add a user rating and re-calculate userAverageRating
movieSchema.methods.addUserRating = function (score) {
    this.userRatings.push({ score });
    const total = this.userRatings.reduce((sum, r) => sum + r.score, 0);
    this.userAverageRating = parseFloat((total / this.userRatings.length).toFixed(1));
    return this.save();
};

module.exports = mongoose.model('Movie', movieSchema);
