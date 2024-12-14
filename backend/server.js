const express = require('express'); 
const bodyParser = require('body-parser');
const authRoutes = require('./routes/authRoutes');

const app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    console.log('Request Body:', req.body);
    next();
});

// testing routes -> send response for each route
// app.get('/', (req, res) => {
//     res.send('server test test');
// });

app.use('/auth', authRoutes);

const PORT = process.env.DB_PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

