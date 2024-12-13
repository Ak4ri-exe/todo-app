const express = require('express');
const supabase = require('./services/supabaseClient'); // Path to your supabaseClient.js

const router = express.Router();

// Test route
router.get('/test-supabase', async (req, res) => {
    const { data, error } = await supabase.from('tasks').select('*').limit(1);

    if (error) {
        return res.status(500).json({ error: error.message });
    }

    res.status(200).json({ message: 'Connected to Supabase!', data });
});

module.exports = router;


// testing connection to supabase