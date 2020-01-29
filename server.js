const express = require('express');
const app = express();
const dotenv = require('dotenv');
dotenv.config({ path: './config/.env' });
const connectDB = require('./config/db');

// Connect to DB
connectDB();

// Set static files
app.use(express.static('./public'));

// Allows server to accept JSON
app.use(express.json());

// Routes
app.use('/signup', require('./routes/signup'));
app.use('/login', require('./routes/login'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
