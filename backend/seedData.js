const Movie = require('./models/Movie');

const expandedMovies = [
    {
        title: "The Shawshank Redemption",
        year: 1994,
        genres: ["Drama"],
        languages: ["English"],
        plot: "Over the course of several years, two convicts form a friendship, seeking solace and eventual redemption through basic compassion.",
        fullplot: "Andy Dufresne is a young and successful banker whose life changes drastically when he is convicted and sentenced to two consecutive life terms for the murder of his wife and her lover.",
        poster: "https://image.tmdb.org/t/p/w500/9cqNxsDDPqOiBqflmE1VJpE2YyN.jpg",
        cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton", "William Sadler"],
        directors: ["Frank Darabont"],
        imdb: { rating: 9.3, votes: 2800000, id: 111161 }
    },
    {
        title: "The Dark Knight",
        year: 2008,
        genres: ["Action", "Crime", "Drama"],
        languages: ["English", "Mandarin"],
        plot: "When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest psychological and physical tests.",
        fullplot: "Set within a year after the events of Batman Begins, Batman, Lieutenant James Gordon, and new District Attorney Harvey Dent successfully begin to round up the criminals that plague Gotham City.",
        poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg",
        cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart", "Michael Caine"],
        directors: ["Christopher Nolan"],
        imdb: { rating: 9.0, votes: 2700000, id: 468569 }
    },
    {
        title: "Inception",
        year: 2010,
        genres: ["Action", "Adventure", "Sci-Fi"],
        languages: ["English", "Japanese", "French"],
        plot: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.",
        fullplot: "Dom Cobb is a skilled thief, the absolute best in the dangerous art of extraction, stealing valuable secrets from deep within the subconscious during the dream state.",
        poster: "https://image.tmdb.org/t/p/w500/oYuLEW9WAFK1P22V9kGD9R91xTe.jpg",
        cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page", "Tom Hardy"],
        directors: ["Christopher Nolan"],
        imdb: { rating: 8.8, votes: 2400000, id: 1375666 }
    },
    {
        title: "Pulp Fiction",
        year: 1994,
        genres: ["Crime", "Drama"],
        languages: ["English", "Spanish", "French"],
        plot: "The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.",
        fullplot: "Vincent Vega and Jules Winnfield are hitmen with a penchant for philosophical discussions. Their storyline is interwoven with those of their boss Marsellus Wallace.",
        poster: "https://image.tmdb.org/t/p/w500/d5iIlFn5s0ImszYzBPb8JPIfbXD.jpg",
        cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson", "Bruce Willis"],
        directors: ["Quentin Tarantino"],
        imdb: { rating: 8.9, votes: 2100000, id: 110912 }
    },
    {
        title: "Interstellar",
        year: 2014,
        genres: ["Adventure", "Drama", "Sci-Fi"],
        languages: ["English"],
        plot: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot is tasked to pilot a spacecraft to find a new planet for humans.",
        fullplot: "In Earth's future, a global crop blight and second Dust Bowl slowly render the planet uninhabitable. Professor Brand, a brilliant NASA physicist, works on plans to save mankind.",
        poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg",
        cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain", "Michael Caine"],
        directors: ["Christopher Nolan"],
        imdb: { rating: 8.7, votes: 1900000, id: 816692 }
    },
    {
        title: "Parasite",
        year: 2019,
        genres: ["Drama", "Thriller"],
        languages: ["Korean", "English"],
        plot: "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
        fullplot: "Kim Ki-taek's family are all unemployed and living in a damp semi-basement apartment. When his son gets a job tutoring, they scheme to get employed by the Parks.",
        poster: "https://image.tmdb.org/t/p/w500/7IiT2Z9wGk1TAYvE3dF1GbhANjE.jpg",
        cast: ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong", "Choi Woo-shik"],
        directors: ["Bong Joon Ho"],
        imdb: { rating: 8.5, votes: 850000, id: 6751668 }
    },
    {
        title: "Spirited Away",
        year: 2001,
        genres: ["Animation", "Adventure", "Family"],
        languages: ["Japanese"],
        plot: "During her family's move to the suburbs, a sullen 10-year-old girl wanders into a world ruled by gods, witches and spirits.",
        fullplot: "10-year-old Chihiro Ogino and her parents travel to their new home when her father takes a wrong turn into an abandoned amusement park.",
        poster: "https://image.tmdb.org/t/p/w500/39wmItxPhA1iSc6094R8Ut72Fl3.jpg",
        cast: ["Rumi Hiiragi", "Miyu Irino", "Mari Natsuki", "Takeshi Naito"],
        directors: ["Hayao Miyazaki"],
        imdb: { rating: 8.6, votes: 780000, id: 245429 }
    },
    {
        title: "Spider-Man: Into the Spider-Verse",
        year: 2018,
        genres: ["Animation", "Action", "Adventure"],
        languages: ["English", "Spanish"],
        plot: "Teen Miles Morales becomes the Spider-Man of his universe and must join with five spider-powered individuals from other dimensions.",
        fullplot: "Bitten by a radioactive spider in a subway station, Brooklyn teenager Miles Morales suddenly develops mysterious powers that transform him into Spider-Man.",
        poster: "https://image.tmdb.org/t/p/w500/iiZZdoQH2W1w26FHot2yL1mIsB.jpg",
        cast: ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld", "Mahershala Ali"],
        directors: ["Bob Persichetti", "Peter Ramsey", "Rodney Rothman"],
        imdb: { rating: 8.4, votes: 600000, id: 4633694 }
    },
    {
        title: "The Godfather",
        year: 1972,
        genres: ["Crime", "Drama"],
        languages: ["English", "Italian"],
        plot: "The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.",
        fullplot: "Don Vito Corleone is the head of the Corleone mafia family in New York. When a gangster rival decides to sell drugs in the city, Vito refuses to support the venture.",
        poster: "https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg",
        cast: ["Marlon Brando", "Al Pacino", "James Caan", "Robert Duvall"],
        directors: ["Francis Ford Coppola"],
        imdb: { rating: 9.2, votes: 1900000, id: 68646 }
    },
    {
        title: "Fight Club",
        year: 1999,
        genres: ["Drama", "Thriller"],
        languages: ["English"],
        plot: "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        fullplot: "A depressed man suffering from insomnia meets a strange soap salesman named Tyler Durden and soon finds himself living in his squalid house after his apartment is destroyed.",
        poster: "https://image.tmdb.org/t/p/w500/pB8BM7pdSp6B6Ih7QZ4DrQ3PmJK.jpg",
        cast: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"],
        directors: ["David Fincher"],
        imdb: { rating: 8.8, votes: 2200000, id: 137523 }
    },
    {
        title: "Forrest Gump",
        year: 1994,
        genres: ["Drama", "Romance"],
        languages: ["English"],
        plot: "The history of the United States from the 1950s to the '70s unfolds from the perspective of an Alabama man with an IQ of 75.",
        fullplot: "Forrest Gump, an innocent man with a low IQ, witnesses and unwittingly influences several defining historical events in 20th century America.",
        poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg",
        cast: ["Tom Hanks", "Robin Wright", "Gary Sinise", "Sally Field"],
        directors: ["Robert Zemeckis"],
        imdb: { rating: 8.8, votes: 2100000, id: 109830 }
    },
    {
        title: "The Matrix",
        year: 1999,
        genres: ["Action", "Sci-Fi"],
        languages: ["English"],
        plot: "When a beautiful stranger leads computer hacker Neo to a forbidding underworld, he discovers the shocking truth about his simulated reality.",
        fullplot: "Thomas A. Anderson is a man living two lives. By day he is an average computer programmer and by night a hacker known as Neo.",
        poster: "https://image.tmdb.org/t/p/w500/f89U3w9RAxWphLCu26h9uSSI2iU.jpg",
        cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
        directors: ["Lana Wachowski", "Lilly Wachowski"],
        imdb: { rating: 8.7, votes: 1950000, id: 133093 }
    },
    {
        title: "Gladiator",
        year: 2000,
        genres: ["Action", "Adventure", "Drama"],
        languages: ["English"],
        plot: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family and sent him into slavery.",
        fullplot: "Maximus is a powerful Roman general, loved by the people and the aging Emperor Marcus Aurelius. Before his death, the Emperor chooses Maximus to be his heir over his son Commodus.",
        poster: "https://image.tmdb.org/t/p/w500/ty8TavbuvIj88x9N7V1Q218svzy.jpg",
        cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
        directors: ["Ridley Scott"],
        imdb: { rating: 8.5, votes: 1530000, id: 172495 }
    },
    {
        title: "Avengers: Endgame",
        year: 2019,
        genres: ["Action", "Adventure", "Sci-Fi"],
        languages: ["English", "Japanese"],
        plot: "After the devastating events of Infinity War, the universe is in ruins. With the help of remaining allies, the Avengers assemble once more.",
        fullplot: "After Thanos wiped out half of all life in the universe, the remaining Avengers must do whatever it takes to undo the Mad Titan's deed.",
        poster: "https://image.tmdb.org/t/p/w500/or06tCSDExugE5F1GjPL5pLqW2e.jpg",
        cast: ["Robert Downey Jr.", "Chris Evans", "Mark Ruffalo", "Chris Hemsworth"],
        directors: ["Anthony Russo", "Joe Russo"],
        imdb: { rating: 8.4, votes: 1180000, id: 4154796 }
    },
    {
        title: "Oppenheimer",
        year: 2023,
        genres: ["Biography", "Drama", "History"],
        languages: ["English", "German"],
        plot: "The story of American scientist J. Robert Oppenheimer and his role in the development of the atomic bomb.",
        fullplot: "During World War II, Lt. Gen. Leslie Groves Jr. appoints physicist J. Robert Oppenheimer to work on the top-secret Manhattan Project.",
        poster: "https://image.tmdb.org/t/p/w500/8Gxv8gSFCU0XGDykEGvC271n8W1.jpg",
        cast: ["Cillian Murphy", "Emily Blunt", "Matt Damon", "Robert Downey Jr."],
        directors: ["Christopher Nolan"],
        imdb: { rating: 8.9, votes: 620000, id: 15398776 }
    },
    {
        title: "Whiplash",
        year: 2014,
        genres: ["Drama", "Music"],
        languages: ["English"],
        plot: "A promising young drummer enlists at a cut-throat music conservatory where his dreams of greatness are mentored by an instructor.",
        fullplot: "Andrew Neiman is an ambitious young jazz drummer, single-minded in his pursuit to rise to the top of his elite east coast conservatory.",
        poster: "https://image.tmdb.org/t/p/w500/7fn624j5lj3xTmeOfas8w9uBBs1.jpg",
        cast: ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
        directors: ["Damien Chazelle"],
        imdb: { rating: 8.5, votes: 910000, id: 2582802 }
    },
    {
        title: "Dune",
        year: 2021,
        genres: ["Action", "Adventure", "Sci-Fi"],
        languages: ["English"],
        plot: "A noble family becomes embroiled in a war for control over the galaxy's most valuable asset while its heir becomes troubled by visions.",
        fullplot: "Paul Atreides, a brilliant and gifted young man born into a great destiny beyond his understanding, must travel to the most dangerous planet in the universe.",
        poster: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94OiXxBhIQ.jpg",
        cast: ["Timothée Chalamet", "Rebecca Ferguson", "Oscar Isaac", "Zendaya"],
        directors: ["Denis Villeneuve"],
        imdb: { rating: 8.0, votes: 710000, id: 1160419 }
    },
    {
        title: "The Prestige",
        year: 2006,
        genres: ["Drama", "Mystery", "Sci-Fi"],
        languages: ["English"],
        plot: "After a tragic accident, two stage magicians in 1890s London engage in a battle to create the ultimate illusion while sacrificing everything.",
        fullplot: "In the end of the Nineteenth Century, in London, Robert Angier, his beloved wife Julia McCullough and Alfred Borden are friends and assistants of a magician.",
        poster: "https://image.tmdb.org/t/p/w500/tRN6c2hB2wY2J3g6E94195n6V0a.jpg",
        cast: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson", "Michael Caine"],
        directors: ["Christopher Nolan"],
        imdb: { rating: 8.5, votes: 1350000, id: 482571 }
    },
    {
        title: "Your Name",
        year: 2016,
        genres: ["Animation", "Drama", "Fantasy"],
        languages: ["Japanese"],
        plot: "Two strangers find themselves linked in a bizarre way. When a connection forms, will distance be the only thing to keep them apart?",
        fullplot: "Mitsuha Miyamizu, a high school girl, yearns to live the life of a boy in the bustling city of Tokyo—a dream that stands in stark contrast to her present life in the countryside.",
        poster: "https://image.tmdb.org/t/p/w500/q719jXXEzOoYaps6babgKnONldX.jpg",
        cast: ["Ryunosuke Kamiki", "Mone Kamishibai", "Ryo Narita"],
        directors: ["Makoto Shinkai"],
        imdb: { rating: 8.4, votes: 290000, id: 5311514 }
    },
    {
        title: "Alien",
        year: 1979,
        genres: ["Horror", "Sci-Fi"],
        languages: ["English"],
        plot: "The crew of a commercial spacecraft encounter a deadly lifeform after investigating an unknown transmission.",
        fullplot: "In the deep reach of space, the crew of the commercial starship Nostromo who are awakened from their cryo-sleep capsules halfway through their journey home to investigate a distress call.",
        poster: "https://image.tmdb.org/t/p/w500/vfrQZBWGDWhVJ2A7hK5pW0v1j1m.jpg",
        cast: ["Sigourney Weaver", "Tom Skerritt", "John Hurt", "Veronica Cartwright"],
        directors: ["Ridley Scott"],
        imdb: { rating: 8.5, votes: 920000, id: 78748 }
    },
    {
        title: "The Silence of the Lambs",
        year: 1991,
        genres: ["Crime", "Drama", "Thriller"],
        languages: ["English"],
        plot: "A young F.B.I. cadet must receive the help of an incarcerated and manipulative cannibal killer to help catch another serial killer.",
        fullplot: "Clarice Starling, a top student at the FBI's training academy, is interviewed by Jack Crawford, head of the Behavioral Science Unit, to interview Dr. Hannibal Lecter.",
        poster: "https://image.tmdb.org/t/p/w500/uS9m8OBk1A8eM9I04v38c11qZ5n.jpg",
        cast: ["Jodie Foster", "Anthony Hopkins", "Lawrence A. Bonney"],
        directors: ["Jonathan Demme"],
        imdb: { rating: 8.6, votes: 1480000, id: 102926 }
    },
    {
        title: "Coco",
        year: 2017,
        genres: ["Animation", "Adventure", "Family"],
        languages: ["English", "Spanish"],
        plot: "Aspiring musician Miguel, confronted with his family's ancestral ban on music, enters the Land of the Dead to find his great-great-grandfather.",
        fullplot: "Despite his family's baffling generations-old ban on music, Miguel dreams of becoming an accomplished musician like his idol, Ernesto de la Cruz.",
        poster: "https://image.tmdb.org/t/p/w500/gGE19vYVZextgfHKHvflXA2zFKV.jpg",
        cast: ["Anthony Gonzalez", "Gael García Bernal", "Benjamin Bratt"],
        directors: ["Lee Unkrich", "Adrian Molina"],
        imdb: { rating: 8.4, votes: 550000, id: 2380307 }
    },
    {
        title: "La La Land",
        year: 2016,
        genres: ["Comedy", "Drama", "Music"],
        languages: ["English"],
        plot: "While navigating their careers in Los Angeles, a pianist and an actress fall in love while attempting to reconcile their aspirations for their future.",
        fullplot: "Mia, an aspiring actress, serves lattes to movie stars in between auditions and Sebastian, a jazz musician, scrapes by playing cocktail party gigs.",
        poster: "https://image.tmdb.org/t/p/w500/uDO84WDhfWwojDUanm6ydEOBTj5.jpg",
        cast: ["Ryan Gosling", "Emma Stone", "Rosemarie DeWitt", "J.K. Simmons"],
        directors: ["Damien Chazelle"],
        imdb: { rating: 8.0, votes: 620000, id: 3783958 }
    },
    {
        title: "The Lion King",
        year: 1994,
        genres: ["Animation", "Adventure", "Drama"],
        languages: ["English"],
        plot: "Lion prince Simba and his father are targeted by his bitter uncle, who wants to ascend the throne himself.",
        fullplot: "A young lion prince named Simba flees his kingdom after the murder of his father, Mufasa. With the help of new friends Timon and Pumbaa, he grows up to reclaim his birthright.",
        poster: "https://image.tmdb.org/t/p/w500/sKCrZ2Te1zGZacXx9iA37E3W2vM.jpg",
        cast: ["Matthew Broderick", "Jeremy Irons", "James Earl Jones"],
        directors: ["Roger Allers", "Rob Minkoff"],
        imdb: { rating: 8.5, votes: 1080000, id: 110357 }
    },
    {
        title: "Blade Runner 2049",
        year: 2017,
        genres: ["Action", "Drama", "Sci-Fi"],
        languages: ["English"],
        plot: "Young Blade Runner K's discovery of a long-buried secret leads him to track down former Blade Runner Rick Deckard, who's been missing for thirty years.",
        fullplot: "Thirty years after the events of the first film, a new blade runner, LAPD Officer K, unearths a long-buried secret that has the potential to plunge what's left of society into chaos.",
        poster: "https://image.tmdb.org/t/p/w500/gCJW03B9W2a21xR1xL0d2382v77.jpg",
        cast: ["Ryan Gosling", "Harrison Ford", "Ana de Armas", "Sylvia Hoeks"],
        directors: ["Denis Villeneuve"],
        imdb: { rating: 8.0, votes: 630000, id: 1856101 }
    },
    {
        title: "Joker",
        year: 2019,
        genres: ["Crime", "Drama", "Thriller"],
        languages: ["English"],
        plot: "A mentally troubled comedian fails to get respect, embarking on a downward spiral that leads to the creation of an iconic villain.",
        fullplot: "In Gotham City, mentally troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime.",
        poster: "https://image.tmdb.org/t/p/w500/udDclC63vG9Qj9HUZPKiof2qjKM.jpg",
        cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
        directors: ["Todd Phillips"],
        imdb: { rating: 8.4, votes: 1400000, id: 7286456 }
    },
    {
        title: "Back to the Future",
        year: 1985,
        genres: ["Adventure", "Comedy", "Sci-Fi"],
        languages: ["English"],
        plot: "Marty McFly, a 17-year-old high school student, is accidentally sent thirty years into the past in a time-traveling DeLorean.",
        fullplot: "Marty McFly, a typical American teenager of the Eighties, is accidentally sent back to 1955 in a plutonium-powered DeLorean time machine invented by mad scientist Doc Brown.",
        poster: "https://image.tmdb.org/t/p/w500/fTWo8wW8N29aZ3wUa59hJqT124d.jpg",
        cast: ["Michael J. Fox", "Christopher Lloyd", "Lea Thompson", "Crispin Glover"],
        directors: ["Robert Zemeckis"],
        imdb: { rating: 8.5, votes: 1250000, id: 88763 }
    },
    {
        title: "The Grand Budapest Hotel",
        year: 2014,
        genres: ["Adventure", "Comedy", "Crime"],
        languages: ["English", "French"],
        plot: "A writer encounters the owner of a high-class European hotel who tells him of his early years as a lobby boy during the hotel's glorious years.",
        fullplot: "The adventures of Gustave H, a legendary concierge at a famous European hotel between the wars, and Zero Moustafa, the lobby boy who becomes his most trusted friend.",
        poster: "https://image.tmdb.org/t/p/w500/eWdyYQreja6JGCzqHWXpWHDrrPo.jpg",
        cast: ["Ralph Fiennes", "F. Murray Abraham", "Mathieu Amalric", "Adrien Brody"],
        directors: ["Wes Anderson"],
        imdb: { rating: 8.1, votes: 840000, id: 2278388 }
    }
];

const seedMoviesIfEmpty = async () => {
    try {
        const count = await Movie.countDocuments();
        // If collection has less than 20 items or old broken poster links, refresh with rich TMDB dataset
        if (count < 20) {
            await Movie.deleteMany({});
            await Movie.insertMany(expandedMovies);
            console.log(`Successfully seeded ${expandedMovies.length} high-definition movie records with working TMDB posters!`);
        }
    } catch (err) {
        console.error('Error seeding movies:', err.message);
    }
};

module.exports = seedMoviesIfEmpty;
