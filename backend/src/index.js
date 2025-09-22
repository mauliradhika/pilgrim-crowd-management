require('dotenv').config();   // Load environment variables from .env file
const express = require('express');  // Express framework for backend
const cors = require('cors');        // Allows frontend to access backend

const app = express();        // Create Express app

// Middleware
app.use(cors());              // Enable CORS (cross-origin requests)
app.use(express.json());      // Parse JSON in request body

// Test route
app.get('/', (req, res) => {
  res.send('Backend server is running!');
});

// Start server
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
