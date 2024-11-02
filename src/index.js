const express = require('express');
const db = require('./db');
const config = require('./config');

const app = express();
app.use(express.json());

// Test endpoint to check connection
app.get('/api/test', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.json({ message: 'Connected to PostgreSQL', time: result.rows[0].now });
  } catch (err) {
    console.error('Error connecting to PostgreSQL', err);
    res.status(500).json({ message: 'Error connecting to database' });
  }
});

// Endpoint to add data to a table
app.post('/api/add-user', async (req, res) => {
  const { name, email } = req.body;
  try {
    await db.query('INSERT INTO users (name, email) VALUES ($1, $2)', [name, email]);
    res.json({ message: 'User added successfully' });
  } catch (err) {
    console.error('Error adding user', err);
    res.status(500).json({ message: 'Error adding user' });
  }
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
