const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb+srv://shivparmar2712_db_user:vHHbe07UaOMSiby9@cluster0.yef4wzg.mongodb.net';

app.use(cors());
app.use(express.json());

// Routes
app.use('/api/tasks', require('./routes/tasks'));
app.use('/api/movies', require('./routes/movies'));

// Database & Server Startup
mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    })
    .catch(err => console.error('MongoDB connection error:', err));