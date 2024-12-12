// Import required packages

const express = require('express'); // require() -> include modules
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


// Loads environment variables from a .env file into process.env.
dotenv.config();

// Creates an instance of an Express application
const app = express();

// Adds middleware to parse JSON bodies of incoming requests.
app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('Request Body:', req.body);
    next();
});

// Sample route for testing
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

  // Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


  // how does this shishi work