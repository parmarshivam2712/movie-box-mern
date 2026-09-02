const Movie = require('./models/Movie');

const sampleMovies = [
    {
        title: "Inception",
        year: 2010,
        genres: ["Action", "Adventure", "Sci-Fi"],
        languages: ["English", "Japanese", "French"],
        plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        fullplot: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state, when the mind is at its most vulnerable.",
        poster: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_SX300.jpg",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
        directors: ["Christopher Nolan"],
        imdb: { rating: 8.8, votes: 2400000, id: 1375666 }
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genres: ["Action", "Crime", "Drama"],
        languages: ["English", "Mandarin"],
        plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
        fullplot: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City.",
        poster: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_SX300.jpg",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
        directors: ["Christopher Nolan"],
        imdb: { rating: 9.0, votes: 2700000, id: 468569 }
    },
    {
        title: "Interstellar",
        year: 2014,
        genres: ["Adventure", "Drama", "Sci-Fi"],
        languages: ["English"],
        plot: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
        fullplot: "In Earth's future, a global crop blight and second Dust Bowl slowly render the planet uninhabitable. Professor Brand, a brilliant NASA physicist, is working on plans to save mankind by transporting Earth's population to a new home via a wormhole.",
        poster: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
        directors: ["Christopher Nolan"],
        imdb: { rating: 8.7, votes: 1900000, id: 816692 }
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        genres: ["Crime", "Drama"],
        languages: ["English", "Spanish", "French"],
        plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        fullplot: "Vincent Vega and Jules Winnfield are hitmen with a penchant for philosophical discussions. Their storyline is interwoven with those of their boss, gangster Marsellus Wallace, his actress wife Mia, and struggling boxer Butch Coolidge.",
        poster: "https://m.media-amazon.com/images/M/MV5BNGNhADPjMTEtN2U3Yi00QjAyLThlNjktZmE3NmU4OWFiMjJeXkEyXkFqcGdeQXVyMTAxOTExNDg@._V1_SX300.jpg",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
        directors: ["Quentin Tarantino"],
        imdb: { rating: 8.9, votes: 2100000, id: 110912 }
    },
    {
        title: "Parasite",
        year: 2019,
        genres: ["Drama", "Thriller"],
        languages: ["Korean", "English"],
        plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        fullplot: "Kim Ki-taek's family are all unemployed and living in a damp, insect-infested semi-basement apartment. When his son gets a job tutoring the daughter of the wealthy Park family, one by one they scheme to get employed by the Parks.",
        poster: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_SX300.jpg",
        cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
        directors: ["Bong Joon Ho"],
        imdb: { rating: 8.5, votes: 850000, id: 6751668 }
    },
    {
        title: "Spirited Away",
        year: 2001,
        genres: ["Animation", "Adventure", "Family"],
        languages: ["Japanese"],
        plot: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits, and where humans are changed into beasts.",
        fullplot: "10-year-old Chihiro Ogino and her parents are traveling to their new home when her father takes a wrong turn into an abandoned amusement park that turns out to be a realm of spirits.",
        poster: "https://m.media-amazon.com/images/M/MV5BMjlmZmI5MDctTI2ZmS00YjA0LWEtY2Y3OGJiMzNhZmU2XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg",
        cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki", "Takeshi Naito"],
        directors: ["Hayao Miyazaki"],
        imdb: { rating: 8.6, votes: 780000, id: 245429 }
    },
    {
        title: "The Shawshank Redemption",
        year: 1994,
        genres: ["Drama"],
        languages: ["English"],
        plot: "Over the course of several years, two convicts form a friendship, seeking solace and eventual redemption through basic compassion.",
        fullplot: "Andy Dufresne is a young and successful banker whose life changes drastically when he is convicted and sentenced to two consecutive life terms for the murder of his wife and her lover.",
        poster: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtMTViYi00MDlhLTg3ZmUtYzE1MzlkC2ZmOWRjXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_SX300.jpg",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
        directors: ["Frank Darabont"],
        imdb: { rating: 9.3, votes: 2800000, id: 111161 }
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        genres: ["Animation", "Action", "Adventure"],
        languages: ["English", "Spanish"],
        plot: "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
        fullplot: "Bitten by a radioactive spider in a subway station, Brooklyn teenager Miles Morales suddenly develops mysterious powers that transform him into the one and only Spider-Man.",
        poster: "https://m.media-amazon.com/images/M/MV5BMjMwNDkxMTgzOF5BMl5BanBnXkFtZTgwNTkwNTgyMmM@._V1_SX300.jpg",
        cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld", "Mahershala Ali"],
        directors: ["Bob Persichetti", "Peter Ramsey", "Rodney Rothman"],
        imdb: { rating: 8.4, votes: 600000, id: 4633694 }
    }
];

const seedMoviesIfEmpty = async () => {
    try {
        const count = await Movie.countDocuments();
        if (count === 0) {
            await Movie.insertMany(sampleMovies);
            console.log('Seeded sample movies collection successfully!');
        }
    } catch (err) {
        console.error('Error seeding movies:', err.message);
    }
};

module.exports = seedMoviesIfEmpty;
