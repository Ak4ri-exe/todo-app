// Import required packages

const express = require('express'); // require() -> include modules
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


// Loads environment variables from a .env file into process.env.
dotenv.config();

// Creates an instance of an Express application
const app = express();

// Middleware functions are functions that process incoming requests before they reach the routes
// Adds middleware to parse JSON bodies of incoming requests.
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('Request Body:', req.body);
    next();
});


// testing routes -> send response for each route
app.get('/', (req, res) => {
    res.send('server test test');
});

app.get('/about', (req, res) => {
  res.send('about page');
});

app.get('/contact', (req, res) => {
  res.send('contact page');
});

  // Start the server and listen to incoming requests on this port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


  // steps
    // start server
    // set up env variables
    // intergrate with supabase
    