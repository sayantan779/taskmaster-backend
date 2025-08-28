const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Simple routes
app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is running!' });
});

app.get('/api/tasks', (req, res) => {
  res.json([
    { id: 1, title: 'Learn Docker', completed: false },
    { id: 2, title: 'Setup CI/CD', completed: false }
  ]);
});

app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});
