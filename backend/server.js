/**
 * Backend server created using Express.
 * It uses various Express middlewares. It also connects the backend to MongoDB using mongoose.
 */

// To read .env file
require('dotenv').config();

let express = require('express');
let mongoose = require('mongoose');
let cors = require('cors');
let bodyParser = require('body-parser');

let dbConfig = require('./database/db');

// Swagger API documentation
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('./swagger.json');

// Express Route
const memeRoute = require('./routes/meme.route')

// Connecting mongoDB using mongoose
mongoose.Promise = global.Promise;
mongoose.connect(dbConfig.db, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Database sucessfully connected!')
},
  error => {
    console.log('Could not connect to database : ' + error)
  }
)

mongoose.set('useFindAndModify', false);

const app = express();

// Express middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cors());

// Swagger API
app.use("/swagger-ui/", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Define API routes using the memeRoute.js created in routes directory
app.use('/', memeRoute)

// 404 Error
app.use((req, res, next) => {
   res.status(404).json("INVALID!");
});

// Server side error
app.use(function (err, req, res, next) {
  console.error(err.message);
  if (!err.statusCode) err.statusCode = 500;
  res.status(err.statusCode).send(err.message);
});

// Home page
app.get('/', (req, res) => {res.send('Hello from express')})

// Default port is 8081
const port = process.env.PORT || 8081;
const server = app.listen(port, () => {
  console.log('Listening on port ' + port)
})