// connect the frontend to supabase 
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://mzkefogccjdmxrujglea.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im16a2Vmb2djY2pkbXhydWpnbGVhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzM1ODY2MzMsImV4cCI6MjA0OTE2MjYzM30.gLKl2QK2HEJBDUnQybRfpQqWQjD8WgBqR4Qhi0noH6Y';
const supabase = createClient(supabaseUrl, supabaseKey);

async function checkConnection() {
    const { data, error } = await supabase
        .from('tasks')
        .select('*')
        .limit(1);

    if (error) {
        console.error('Error fetching data:', error);
    } else {
        console.log('Connection successful, data:', data);
    }
}

// Call the function to check connection
checkConnection();

// sign up a user
async function registerUser(username, email, password){
    //add email and pw
    const { data: authData, error: authError } = await supabase.signUp({
        username: username,
        email: email,
        password: password,
    });

    if (authError) {
        console.error('Registration error:', authError.message);
        return;
    }
    console.log('User registered:', authData)

    // add username
    // const user = authData.user;
    // const { data: profileData, error: profileError } = await supabase.from('users').insert([
    //     { id: user.id, username: username }
    // ]);

    // if (profileError) {
    //     console.error('Profile error:', profileError);
    // } else {
    //     console.log('Profile created:', profileData);
    // }
}

document.getElementById('sign-up').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pw').value;
    console.log(username);
    console.log(email);
    console.log(password);
    registerUser(username, email, password);
});

const { data, error } = await supabase.from('users').select('*');
console.log("Users:", data);

// - **description** — A description of the task
// - **id** — Unique identifier for the task
// - **created_at** — Timestamp when the task was created
// - **updated_at** — Timestamp when the task was last updated
// - **is_done** — Boolean value (default: false) to indicate whether the task is completed