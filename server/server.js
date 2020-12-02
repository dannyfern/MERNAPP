const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const connectDB = require('./config/db');

//Express SETUP
const app = express();

//Connect Database
connectDB()

// MIDDLEWARE
app.use(express.json({ extended: false }))

app.get('/', (req, res) => res.send('I AM RUNNING'));

//Defining the Routes
app.use('/api/users', require('./routes/api/users'));
app.use('/api/auth', require('./routes/api/auth'));
app.use('/api/profile', require('./routes/api/profile'));
app.use('/api/posts', require('./routes/api/posts'));

const PORT = process.env.PORT || 5000

app.listen(PORT, () => console.log(`Server is up and running on ${PORT}...`));