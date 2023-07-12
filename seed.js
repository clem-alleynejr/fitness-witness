require('dotenv').config();
require('./config/database');

const Exercise = require('./models/exercise')

(async function() {

    await Excercise.deleteMany({});
    const exercises = await Exercise.create([
        {
          "bodyPart": "waist",
          "equipment": "body weight",
          "gifUrl": "https://edb-4rme8.ondigitalocean.app/image/wymEbxl7j4wKcS",
          "id": "0001",
          "name": "3/4 sit-up",
          "target": "abs"
        },

      ]);
  
    process.exit();
  })();