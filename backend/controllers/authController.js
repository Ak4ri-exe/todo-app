const bcrypt = require('bcrypt');
const sql = require('../services/supabaseService');


exports.register = async (req, res) => {
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
};

exports.login = async (req, res) => {
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
    catch (err){
        res.status(500).json({ error: err.message });
    }
};