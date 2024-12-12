// Import required packages

const express = require('express'); // require() -> include modules
const bodyParser = require('body-parser');
const dotenv = require('dotenv');


// Initialize dotenv to load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(bodyParser.json()); // To parse JSON bodies

// Sample route for testing
app.get('/', (req, res) => {
    res.send('Hello, World!');
  });
  
  // Start the server
  const PORT = process.env.PORT || 5000;
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
