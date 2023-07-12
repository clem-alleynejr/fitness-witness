// Connect to the database
require('dotenv').config();
require('./config/database');

// Require the Mongoose models
const User = require('./models/user');
const Exercise = require('./models/exercise');
// const Order = require('./models/workout');

// Local variables will come in handy for holding retrieved documents
let user, exercise, workout;
let users, exercises, workouts;
