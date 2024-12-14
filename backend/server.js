const express = require('express'); 
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
const postgres = require('postgres');

dotenv.config();


const app = express();


app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('Request Body:', req.body);
    next();
});

const sql = postgres({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_DATABASE,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  ssl: { rejectUnauthorized: false }
});

// testing routes -> send response for each route
app.get('/', (req, res) => {
    res.send('server test test');
});

app.post('/register', async (req, res) => {
  const { username, email, password } = req.body;

    try {
      const result = await sql`
      INSERT INTO users
      (username, email, password) 
      VALUES
      (${username}, ${email}, ${password}) 
      RETURNING *`; 
      res.status(201).json(result[0]);
    } catch (err){
      res.status(500).json({error: err.message});
    }
});

app.post('/login', async (req, res) => {
  const {username, password} = req.body;
  try {
    const result = await sql`
    SELECT username, password from users
    WHERE username = ${username} AND password = ${password}`
    // check if user with those creentials exits in the DB
    if (result.length > 0){
      res.status(200).json({message: 'user logged in successfully'});
    }
    else{
      res.status(401).json({message: 'Invalid Username or Password'})
    }
  }
  catch {
    res.status(500).json({ error: err.message });
  }
});

app.post('/lol', (req, res) => {

    return res.status(500).json({message: "Errrrrrror"})
});

  // Start the server and listen to incoming requests on this port
const PORT = process.env.DB_PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


  // steps
    // start server
    // set up env variables
    // intergrate with supabase
    