const sql = require('../services/supabaseService');
const bcrypt = require('bcrypt');

exports.register = async (req, res) => {
    const { username, email, password } = req.body;
    // hashing the password
    const hashedPassword = await bcrypt.hash(password, 10);
    try {
        const result = await sql`
        INSERT INTO users
        (username, email, password) 
        VALUES
        (${username}, ${email}, ${hashedPassword}) 
        RETURNING *`; 
        res.status(201).json(result[0]);
    } catch (err){
        res.status(500).json({error: err.message});
    }
};

exports.login = async (req, res) => {
    const {username, password} = req.body;
    try {
        const result = await sql`
        SELECT username, password from users
        WHERE username = ${username}`
        // check if user exits in the DB
        if (result.length > 0){
            const user = result[0];

            // check if the password is correct 
            const match = await bcrypt.compare(password, user.password);
            console.log(match);
            if (match) {
                res.status(200).json({message: 'user logged in successfully :3'});
            }
            else{
                res.status(401).json({message: 'Invalid Password'})
            }
        }
        else{
        res.status(401).json({message: 'Invalid Username'})
        }
    }
    catch (err){
        res.status(500).json({ error: err.message });
    }
};